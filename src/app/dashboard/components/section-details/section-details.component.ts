import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss'],
})
export class SectionDetailsComponent implements OnInit {
  arraySteps: string[] = [];
  actualStep: number = 0;
  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {}

  next() {}
  back() {}

  toAddStudents() {}
}
