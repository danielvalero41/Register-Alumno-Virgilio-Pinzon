import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'details-students',
  templateUrl: './details-students.component.html',
  styleUrls: ['./details-students.component.scss'],
})
export class DetailsStudentsComponent implements OnInit {
  @Output() back = new EventEmitter<any>();

  formDetailsStudent: FormGroup;
  dateString;
  edad: number;
  validDate: boolean;
  listGrados = [];
  listOfSelectedValue = [];
  today = new Date();

  constructor(public fb: FormBuilder, public datePipe: DatePipe) {
    this.formDetailsStudent = this.fb.group({
      apellido: ['Valero Guerrero'],
      nombre: ['Carlos Daniel'],
      tipoCedula: ['V'],
      cedula: ['21319340'],
      grupoSanguineo: ['A'],
      lugarNacimiento: [''],
      fechaNacimiento: [''],
      sexo: [''],
      edad: [''],
      direccionHabitacion: [''],
      parroquia: [''],
      municipio: [''],
      pais: [''],
      estadoNacimiento: [''],
      telefonoResidecial: [''],
      correo: [''],
      poseeCanaima: [''],
      serialCanaima: [''],
      nuevoIngreso: [''],
      institucionProcedencia: [''],
      razonInscripcion: [''],
      gradoCursar: [''],
      repitiente: [''],
      regular: [''],
      tallaCamisa: [''],
      estatura: [''],
      peso: [''],
      tallaPantalon: [''],
      calzado: [''],
      nombreEmergencia: [''],
      parentesco: [''],
      telefonoResidencial: [''],
      telefonoCelular: [''],
      poseeHermanos: [''],
      cantidadHermanos: [''],
      gradoCursan: [['']],
    });

    this.listGrados = [
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
      {
        label: '3',
        value: '3',
      },
      {
        label: '4',
        value: '4',
      },
      {
        label: '5',
        value: '5',
      },
      {
        label: '6',
        value: '6',
      },
    ];
  }

  get f() {
    return this.formDetailsStudent.controls;
  }

  ngOnInit(): void {
    // this.setReadOnly();
  }

  setReadOnly() {
    for (var control in this.formDetailsStudent.controls) {
      this.formDetailsStudent.controls[control].disable();
    }
  }

  detectedDate(e) {
    this.f.fechaNacimiento.markAllAsTouched();
  }

  getDate(e) {
    if (e) {
      this.dateString = this.datePipe.transform(e, 'yyyy-MM-dd');
      var newdate = this.dateString
        .split('/')
        .reverse()
        .join('/')
        .replaceAll('-', '/');
      this.edad = this.calculateAge(newdate);
      if (this.edad < 18) {
        this.validDate = false;
      } else {
        this.validDate = true;
      }
    }
  }

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    differenceInCalendarDays(current, this.today) > 0;

  calculateAge(fecha_nacimiento) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var birthDate = new Date(fecha_nacimiento);

    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
