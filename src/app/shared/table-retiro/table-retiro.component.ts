import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-retiro',
  templateUrl: './table-retiro.component.html',
  styleUrls: ['./table-retiro.component.scss'],
})
export class TableRetiroComponent implements OnInit {
  @Input() listOfData = [];
  @Input() tableHeaders = [];
  @Output() sendData = new EventEmitter<any>();
  i = 0;
  editId: string | null = null;
  constructor() {}

  ngOnInit(): void {
    this.addRow();
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
    console.log(this.listOfData);
    this.sendData.emit(this.listOfData);
  }

  addRow(): void {
    this.listOfData = [
      ...this.listOfData,
      {
        id: this.i,
        retiro: false,
        fecha: 'Ingrese la fecha',
        motivo: 'Ingrese motivo',
        institutoAEstudiar: 'Ingrese el nombre de la institucion',
        nombreRepresentante: 'Ingrese el nombre del representante',
        cedulaRepresentante: 'Ingrese la cedula',
      },
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter((d) => d.id !== id);
  }

  unsorted() {}
}
