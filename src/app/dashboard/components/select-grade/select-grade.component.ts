import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'select-grade',
  templateUrl: './select-grade.component.html',
  styleUrls: ['./select-grade.component.scss'],
})
export class SelectGradeComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {}

  selectGrade(option) {
    this.next.emit();
  }
}
