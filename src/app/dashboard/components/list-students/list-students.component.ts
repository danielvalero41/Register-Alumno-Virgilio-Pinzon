import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>();
  formSearch: FormGroup;
  tableHeaders = [];
  rows = [];
  constructor(public fb: FormBuilder) {
    this.formSearch = this.fb.group({
      search: [''],
    });

    this.tableHeaders = [
      {
        label: 'Nombre y Apellido',
      },
      {
        label: 'Cedula',
      },
      {
        label: 'Edad',
      },
      {
        label: 'Acciones',
      },
    ];

    this.rows = new Array(20).fill(0).map((_, index) => ({
      id: index,
      nombre: `Estudiante ${index}`,
      cedula: 2315497,
      edad: 12,
      action: {
        id: 1,
        icono: 'fas fa-search',
        color: 'black',
        nombre: 'search',
      },
    }));
    console.log(this.rows);
  }

  ngOnInit(): void {}

  filterEnter() {}

  eventActionEmitter(e) {
    console.log(e);
  }

  backStep() {
    this.back.emit();
  }
}
