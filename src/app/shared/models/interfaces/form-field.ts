import { AbstractControl, ValidationErrors } from '@angular/forms';
import { InputTypes } from '..';

export interface FormField {
  key: string;
  label: string;
  type: InputTypes;
  placeholder?: string;
  validators: ((
    control: AbstractControl<any, any>
  ) => ValidationErrors | null)[];
  options?: any[];
}
