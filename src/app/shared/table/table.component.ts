import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() {}

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
