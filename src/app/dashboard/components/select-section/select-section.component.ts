import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'select-section',
  templateUrl: './select-section.component.html',
  styleUrls: ['./select-section.component.scss'],
})
export class SelectSectionComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  selectSection(option) {
    this.next.emit();
  }

  backStep() {
    this.back.emit();
  }
}
