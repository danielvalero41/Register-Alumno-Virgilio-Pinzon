import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsStudentsComponent } from './components/details-students/details-students.component';
import { SectionDetailsComponent } from './components/section-details/section-details.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'details/:id',
    component: SectionDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
