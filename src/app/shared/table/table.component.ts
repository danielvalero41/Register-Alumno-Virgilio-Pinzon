import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/services/dashboard.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() rows;
  @Input() tableHeaders;
  @Output() eventAction = new EventEmitter<any>();
  isCheckbox = false;
  pageIndex = 1;
  pageSize = 2;
  total = 5;
  pageChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.dashboardService.loadListStudents(10, pageIndex);
  }
  constructor(public dashboardService: DashboardService) {}

  ngOnInit(): void {
    console.log(this.rows);
    console.log(this.tableHeaders);
  }

  isObject(obj) {
    return typeof obj === 'object';
  }

  selectedRow(e) {
    console.log(e);
  }

  unsorted() {}

  actionEmit(data) {
    this.eventAction.emit(data);
  }
}
