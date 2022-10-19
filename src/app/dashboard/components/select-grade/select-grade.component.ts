import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'select-grade',
  templateUrl: './select-grade.component.html',
  styleUrls: ['./select-grade.component.scss'],
})
export class SelectGradeComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  selectGrade(option) {
    this.next.emit();
  }
}
