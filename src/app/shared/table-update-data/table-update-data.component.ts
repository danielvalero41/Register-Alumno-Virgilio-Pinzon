import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'table-update-data',
  templateUrl: './table-update-data.component.html',
  styleUrls: ['./table-update-data.component.scss'],
})
export class TableUpdateDataComponent implements OnInit {
  @Input() listOfData = [];
  @Input() tableHeaders = [];
  @Output() sendData = new EventEmitter<any>();

  editId: string | null = null;
  idError: any;
  estaturaMin = 0.5;
  estaturaMax = 2;
  pesoMin = 10;
  pesoMax = 80;
  calzadoMin = 10;
  calzadoMax = 45;
  tallaPanMin = 4;
  tallaPanMax = 30;
  validEstatura: boolean;
  validPeso: boolean;
  validCalzado: boolean;
  validTallaPan: boolean;
  constructor() {}

  ngOnInit(): void {}

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
    this.sendData.emit(this.listOfData);
  }

  detetedEstatura(data, index) {
    if (data < this.estaturaMin || data > this.estaturaMax) {
      this.validEstatura = true;
    } else {
      this.validEstatura = false;
    }

    this.idError = index;
  }

  detetedPeso(data, index) {
    if (data < this.pesoMin || data > this.pesoMax) {
      this.validPeso = true;
    } else {
      this.validPeso = false;
    }

    this.idError = index;
  }

  detetedCalzado(data, index) {
    if (data < this.calzadoMin || data > this.calzadoMax) {
      this.validCalzado = true;
    } else {
      this.validCalzado = false;
    }

    this.idError = index;
  }

  detetedTallaPantalon(data, index) {
    if (data < this.tallaPanMin || data > this.tallaPanMax) {
      this.validTallaPan = true;
    } else {
      this.validTallaPan = false;
    }

    this.idError = index;
  }
}
