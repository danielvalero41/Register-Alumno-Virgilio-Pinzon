import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectGradeComponent } from './components/select-grade/select-grade.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
