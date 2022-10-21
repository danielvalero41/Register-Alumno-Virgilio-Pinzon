import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  arraySteps: string[] = [];
  actualStep: number = 0;
  constructor() {
    this.arraySteps = [
      'select-grade',
      'select-section',
      'list-students',
      'details-students',
    ];
  }

  ngOnInit(): void {}

  next() {
    if (this.actualStep < this.arraySteps.length - 1) this.actualStep++;
  }
  back() {
    if (this.actualStep > 0) this.actualStep--;
  }
}
