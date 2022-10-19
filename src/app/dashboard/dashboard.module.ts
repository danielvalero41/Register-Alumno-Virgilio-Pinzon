import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SelectGradeComponent } from './components/select-grade/select-grade.component';
import { SelectSectionComponent } from './components/select-section/select-section.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { DetailsStudentComponent } from './components/details-student/details-student.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SelectGradeComponent,
    SelectSectionComponent,
    ListStudentsComponent,
    DetailsStudentComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
