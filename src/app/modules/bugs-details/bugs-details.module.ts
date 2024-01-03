import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsDetailsRoutingModule } from './bugs-details-routing.module';
import * as fromPages from './pages';
import { SharedModule } from '@shared/shared.module';
import {
  NgbTypeaheadModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [...fromPages.pages],
  imports: [
    CommonModule,
    BugsDetailsRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
  ],
})
export class BugsDetailsModule {}
