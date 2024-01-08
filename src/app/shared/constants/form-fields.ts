import { Validators } from '@angular/forms';
import { BugSeverity, InputTypes, Releases } from '@shared/models';

export const FORM_FIELDS = [
  {
    key: 'title',
    label: 'Title',
    type: InputTypes.TEXT,
    placeholder: 'Enter title',
    validators: [Validators.required],
  },
  {
    key: 'severity',
    label: 'Severity',
    type: InputTypes.SELECT,
    options: Object.values(BugSeverity),
    validators: [Validators.required],
  },
  {
    key: 'release',
    label: 'Release',
    type: InputTypes.SELECT,
    options: Object.values(Releases),
    validators: [Validators.required],
  },
  {
    key: 'link',
    label: 'Link',
    type: InputTypes.TEXT,
    placeholder: 'e.g., https://bugtracker.com/bug-1',
    validators: [
      Validators.required,
      Validators.pattern(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#?&\/\/=]*$/),
    ],
  },
  {
    key: 'description',
    label: 'Description',
    type: InputTypes.TEXT_AREA,
    placeholder: 'Describe the bug in detail',
    validators: [Validators.required],
  },
  {
    key: 'stackTrace',
    label: 'Stack Trace (optional)',
    type: InputTypes.TEXT_AREA,
    placeholder: 'Add stack trace for the bug',
    validators: [],
  },
];
