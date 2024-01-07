import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardBackgroundDirective } from './directives';
import { SliceWithEllipsisPipe } from './pipes';
import * as fromComponents from './components';

@NgModule({
  imports: [
    ...fromComponents.components,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
    CardBackgroundDirective,
    SliceWithEllipsisPipe,
  ],
  exports: [
    ...fromComponents.components,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule,
    CardBackgroundDirective,
    SliceWithEllipsisPipe,
  ],
})
export class SharedModule {}
