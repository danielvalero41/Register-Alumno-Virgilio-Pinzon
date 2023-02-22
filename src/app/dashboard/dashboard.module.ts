import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SelectGradeComponent } from './components/select-grade/select-grade.component';
import { SelectSectionComponent } from './components/select-section/select-section.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { DetailsStudentsComponent } from './components/details-students/details-students.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SectionDetailsComponent } from './components/section-details/section-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SelectGradeComponent,
    SelectSectionComponent,
    ListStudentsComponent,
    DetailsStudentsComponent,
    AddStudentsComponent,
    SectionDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NzSpinModule,
    NzNotificationModule,
    NzInputModule,
  ],
  providers: [NzNotificationService],
})
export class DashboardModule {}
