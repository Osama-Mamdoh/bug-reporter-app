import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BugsComponent, CreateBugComponent } from './pages';

const routes: Routes = [
  {
    path: 'details',
    component: BugsComponent,
  },
  {
    path: 'create-bug',
    component: CreateBugComponent,
  },
  {
    path: 'edit-bug/:id',
    component: CreateBugComponent,
  },
  { path: '**', redirectTo: 'details' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BugsDetailsRoutingModule {}
