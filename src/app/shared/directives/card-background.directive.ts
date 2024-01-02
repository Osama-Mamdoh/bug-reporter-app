import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BugSeverity } from '@shared/models';

@Directive({
  selector: '[cardBackground]',
  standalone: true,
})
export class CardBackgroundDirective implements OnInit {
  @Input('cardBackground') severity: BugSeverity;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
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
      default:
        return '';
    }
  }
}
