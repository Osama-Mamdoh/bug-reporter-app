import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BugSeverity } from '@shared/models';

@Directive({
  selector: '[cardBackground]',
  standalone: true,
})
export class CardBackgroundDirective implements OnChanges {
  @Input('cardBackground') severity: BugSeverity;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['severity']) {
      this.updateBackgroundClass();
    }
  }

  private updateBackgroundClass() {
    const backgroundClasses = [
      'bg-danger',
      'bg-warning',
      'bg-primary',
      'bg-success',
      'bg-secondary',
      'bg-danger-subtle',
    ];
    this.elementRef.nativeElement.classList.remove(...backgroundClasses);
    const classToAdd = this.getClassBasedOnSeverity(this.severity);
    this.elementRef.nativeElement.classList.add(classToAdd);
  }

  private getClassBasedOnSeverity(severity: BugSeverity): string {
    switch (severity) {
      case BugSeverity.BLOCKER:
        return 'bg-danger';
      case BugSeverity.CRITICAL:
        return 'bg-warning';
      case BugSeverity.MAJOR:
        return 'bg-primary';
      case BugSeverity.MEDIUM:
        return 'bg-success';
      case BugSeverity.LOW:
        return 'bg-secondary';
      case BugSeverity.MINOR:
        return 'bg-danger-subtle';
      default:
        return '';
    }
  }
}
