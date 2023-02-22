import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss'],
})
export class TableCustomComponent implements OnInit {
  @Input() listOfData = [];
  @Input() tableHeaders = [];
  @Output() sendData = new EventEmitter<any>();
  i = 0;
  selectedPeriodo: string;
  periodos: string[] = [];
  editId: string | null = null;

  constructor() {
    const currentYear = 2000;
    for (let i = currentYear; i <= 2030; i++) {
      this.periodos.push(`${i}-${i + 1}`);
    }
  }

  onPeriodoSelected(periodo: string) {
    this.selectedPeriodo = periodo;
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
        grado: 'Ingrese el grado',
        anoEscolar: 'Ingrese el año escolar',
        fechaInscripcion: 'Ingrese la fecha de inscripción',
        nombre: 'Ingrese el nombre del docente',
      },
    ];
    this.i++;
  }

  deleteRow(id: string): void {
    this.listOfData = this.listOfData.filter((d) => d.id !== id);
  }

  ngOnInit(): void {
    // this.addRow();
    // this.addRow();
  }

  unsorted() {}
}
