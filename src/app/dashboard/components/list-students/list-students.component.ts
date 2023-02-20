import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ListAllStudents } from 'src/app/helpers/Estudents';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  @Output() next = new EventEmitter<any>();
  @Output() back = new EventEmitter<any>();
  @Output() toAddStudents = new EventEmitter<any>();
  formSearch: FormGroup;
  tableHeaders = [];
  rows = [];
  currentListStudents!: ListAllStudents;
  constructor(
    public fb: FormBuilder,
    public route: Router,
    public dashboardService: DashboardService
  ) {
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
  }

  ngOnInit(): void {
    this.dashboardService.loadListStudents();

    this.dashboardService.currentListStudents$.subscribe(
      (data: ListAllStudents) => {
        this.rows = [];
        this.currentListStudents = data;
        if (data.docs.length > 0) {
          this.rows = data.docs.map((item, index) => ({
            id: index,
            nombre: `${item.datosPersonales.nombre} ${index}`,
            cedula: `${item.datosPersonales.cedula.tipo}-${item.datosPersonales.cedula.numero}`,
            edad: `${item.datosPersonales.edad}`,
            action: {
              id: 1,
              icono: 'fas fa-search',
              color: 'black',
              nombre: 'search',
            },
          }));
        }
      }
    );

    this.formSearch
      .get('search')
      ?.valueChanges.pipe(debounceTime(500))
      .subscribe((value) => {
        this.dashboardService.isLoading.next(true);
        this.dashboardService.getListStudentsByName(value);
      });
  }

  filterEnter() {}

  eventActionEmitter(e) {
    this.next.emit();
  }

  backStep() {
    this.back.emit();
  }

  addEstudiante() {
    this.toAddStudents.emit();
  }
}
