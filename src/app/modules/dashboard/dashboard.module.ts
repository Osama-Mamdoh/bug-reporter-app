import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import * as fromPages from './pages';
import * as fromComponents from './components';
import { SharedModule } from '@shared/shared.module';
import { NgChartsModule } from 'ng2-charts';
import { CardBackgroundDirective } from '@shared/directives';

@NgModule({
  declarations: [...fromPages.pages, ...fromComponents.components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgChartsModule,
    CardBackgroundDirective,
  ],
})
export class DashboardModule {}
