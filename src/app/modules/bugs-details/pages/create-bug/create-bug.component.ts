import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BugService } from '@core/services';
import { BugSeverity, Releases } from '@shared/models';
@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrl: './create-bug.component.scss',
})
export class CreateBugComponent {
  bugForm: FormGroup;
  bugSeverity = Object.values(BugSeverity);
  releases = Object.values(Releases);

  constructor(
    private formBuilder: FormBuilder,
    private bugService: BugService,
    private router: Router
  ) {
    this.bugForm = this.formBuilder.group({
      title: ['', Validators.required],
      severity: ['', Validators.required],
      release: ['', Validators.required],
      link: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%_\+.~#?&\/\/]*([-a-zA-Z0-9@:%_\+.~#?&\/\/]*)/
          ),
        ],
      ],
      description: ['', Validators.required],
      stackTrace: [],
    });
  }

  onSubmit() {
    const bug = {
      ...this.bugForm.value,
      createdBy: `Tester-${Math.floor(Math.random() * 10) + 1}`,
      createdAt: new Date(),
    };
    this.bugService.createBug(bug);
    this.router.navigate(['/bugs/details']).then();
  }
}
