import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BugService } from '@core/services';
import { FORM_FIELDS } from '@shared/constants';
import { Bug, FormField, InputTypes } from '@shared/models';

@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrl: './create-bug.component.scss',
})
export class CreateBugComponent {
  bugForm: FormGroup;
  updatedBug: Bug | undefined;
  formFields = FORM_FIELDS;
  inputTypes = InputTypes;

  /**
   * Constructs a new instance of the BugFormComponent.
   * Initializes the bugForm FormGroup and subscribes to route parameter changes.
   * If the 'id' parameter exists, retrieves the bug from bugService and patches the form values.
   * @param bugService The BugService dependency used for bug-related operations.
   * @param router The Router dependency used for navigation.
   * @param route The ActivatedRoute dependency used for retrieving route parameters.
   */
  constructor(
    private bugService: BugService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bugForm = new FormGroup(this.createFormControls(this.formFields));
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.updatedBug = this.bugService.getBug(Number(id));
        this.bugForm.patchValue({
          title: this.updatedBug?.title,
          severity: this.updatedBug?.severity,
          release: this.updatedBug?.release,
          link: this.updatedBug?.link,
          description: this.updatedBug?.description,
          stackTrace: this.updatedBug?.stackTrace,
        });
      }
    });
  }

  /**
   * Handles the form submission by creating or editing a bug
   * Navigating to the bug details page.
   */
  onSubmit() {
    const bug = {
      ...this.bugForm.value,
      createdBy: this.updatedBug
        ? this.updatedBug.createdBy
        : `Tester-${Math.floor(Math.random() * 10) + 1}`,
      createdAt: this.updatedBug ? this.updatedBug.createdAt : new Date(),
      id: this.updatedBug?.id,
    };
    if (this.updatedBug) {
      this.bugService.editBug(bug);
    } else {
      this.bugService.createBug(bug);
    }
    this.router.navigate(['/bugs/details']).then();
  }

  /**
   * Creates the form controls based on the provided form fields.
   * @param fields An array of form fields.
   * @returns An object containing the form controls.
   */
  createFormControls(fields: FormField[]): { [key: string]: FormControl } {
    return fields.reduce(
      (formControls: { [key: string]: FormControl }, field) => {
        formControls[field.key] = this.createFormControl(field);
        return formControls;
      },
      {}
    );
  }

  /**
   * Creates a new FormControl instance for a given form field.
   * @param field The form field.
   * @returns A new FormControl instance.
   */
  createFormControl(field: FormField): FormControl {
    return new FormControl('', field.validators || []);
  }
}
