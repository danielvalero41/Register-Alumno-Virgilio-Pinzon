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
  listParentesco = [];
  listDeporte = [];
  listOfSelectedValue = [];
  listEstadoCivil = [];
  listEnfermedades = [];
  listGradoInstruccion = [];
  listTenencia = [];
  listTipoVivienda = [];
  listActividadesReligion = [];
  listEnfermedadesEmbarazo = [];
  listAntecedentesPerinatales = [];
  listEnfermedadesNino = [];
  listTipoSeguro = [];
  listNecesidadesCompromiso = [];
  listActividades = [];
  listGustosNino = [];
  listTransporte = [];
  listEstudiantes = [];
  controlInscripcion = [];
  tableHeaders = [];

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
      mama: [false],
      papa: [false],
      otros: [''],
      totalPersona: [''],
      numeroHermanos: [''],
      lugarOcupaNino: [''],
      descripcionRelacion: [''],
      viven: [''],
      vivenParentesco: [['']],
      descripcionRelacionOtros: [''],
      personaPostClases: [''],
      acompananteTareas: [''],
      deportesPractica: [['']],
      horarioPractica: [''],
      apellidosMadre: [''],
      nombresMadre: [''],
      tipoCedulaMadre: [''],
      cedulaMadre: [''],
      fechaNacimientoMadre: [''],
      estadoCivilMadre: [''],
      ingresoEconomicoMadre: [''],
      telResidencialMadre: [''],
      telCelularMadre: [''],
      profesionMadre: [''],
      lugarTrabajoMadre: [''],
      telefonoTrabajoMadre: [''],
      edadMadre: [''],
      lugarNacimientoMadre: [''],
      direccionHabitacionMadre: [''],
      enfermedadesPadecidasMadre: [['']],
      viveNinoMadre: [''],
      gradoInstruccionMadre: [''],
      viviendaTenencia: [''],
      viviendaTipo: [''],
      religionMadre: [''],
      actividadesReligionMadre: [['']],
      misionSocialPosee: [''],
      misionSocialDescripcion: [''],
      correoMadre: [''],
      relacionMadreNino: [''],
      apellidosPadre: [''],
      nombresPadre: [''],
      tipoCedulaPadre: [''],
      cedulaPadre: [''],
      fechaNacimientoPadre: [''],
      estadoCivilPadre: [''],
      lugarNacimientoPadre: [''],
      profesionPadre: [''],
      edadPadre: [''],
      ingresoEconomicoPadre: [''],
      telResidencialPadre: [''],
      telCelularPadre: [''],
      lugarTrabajoPadre: [''],
      telefonoTrabajoPadre: [''],
      enfermedadesPadecidasPadre: [['']],
      correoPadre: [''],
      viveNinoPadre: [''],
      gradoInstruccionPadre: [''],
      relacionPadreNino: [''],
      enfermedadesEmbarazo: [['']],
      antecedentesPerinatales: [['']],
      antecedentesPostNatales: [''],
      problemasNacimiento: [''],
      pesoNacimiento: [''],
      tallaNacimiento: [''],
      lloroNacer: [''],
      gatearGateo: [''],
      gatearEdad: [''],
      edadCaminar: [''],
      familiarDiscapacidadPosee: [''],
      familiarDiscapacidadDescripcion: [''],
      enfermedadesNino: [['']],
      vacunasRecibidas: [['']],
      alimentosComeTodo: [''],
      alimentosTipo: [''],
      alergiaPosee: [''],
      alergiaDescripcion: [''],
      alergiaAlimentos: [''],
      condicionEspecial: [''],
      objetosRecetadosZapatos: [''],
      objetosRecetadosLentes: [''],
      objetosRecetadosOtros: [''],
      tratamientoRecibe: [''],
      tratamientoNombre: [''],
      tratamientoMotivo: [''],
      tratamientoMedico: [''],
      tratamientoEspecialidad: [''],
      tratamientoFecha: [''],
      aseguradoSeguro: [''],
      aseguradoTipo: [['']],
      desarrolloLenguajeEdadHablo: [''],
      desarrolloLenguajeDuermeBien: [''],
      desarrolloLenguajeAlteraFacil: [''],
      desarrolloLenguajeManoTrabaja: [''],
      necesidadesCompromiso: [['']],
      representanteLegalApellidos: [''],
      representanteLegalNombre: [''],
      representanteLegalTipo: [''],
      representanteLegalCedula: [''],
      representanteLegalFechaNacimiento: [''],
      representanteLegalEdad: [''],
      representanteLegalParentesco: [''],
      representanteLegalLugarNacimiento: [''],
      representanteLegalProfesion: [''],
      representanteLegalCorreo: [''],
      representanteLegalEstadoCivil: [''],
      representanteLegalIngresoEconomico: [''],
      representanteLegalDireccionHabitacion: [''],
      representanteLegalViveConNino: [''],
      representanteLegalTelCasa: [''],
      representanteLegalTelCelular: [''],
      representanteLegalLugarTrabajo: [''],
      representanteLegalTelTrabajo: [''],
      representanteLegalRazonRepresenta: [''],
      actividadesIndependientes: [['']],
      personaCuidaNinoHogar: [''],
      gustosNino: [['']],
      gustosNinoHoras: [''],
      retiraSoloInstitucion: [''],
      retiraSoloInstitucionRazon: [''],
      responsableRetiroNombre: [''],
      responsableRetiroCedula: [''],
      transporteEscuelaMedio: [''],
      transporteEscuelaVia: [''],
      gradoReprobado: [''],
      gradoReprobadoGrado: [''],
      cumpleNormasHogar: [''],
      firmaActaCompromiso: [''],
    });

    this.tableHeaders = [
      'Grado',
      'Año Escolar',
      'Fecha de Inscripción',
      'Nombre y Apellido del Docente',
    ];

    for (let i = 0; i < 5; i++) {
      this.listEstudiantes.push({
        id: i,
        grado: '1',
        anoEscolar: '2023-2024',
        fechaInscripcion: '2023/09/16',
        nombre: 'Petra Perez',
      });
    }

    this.listTransporte = [
      {
        label: 'Privado',
        value: 'Privado',
      },
      {
        label: 'Publico',
        value: 'Publico',
      },
      {
        label: 'Transporte Escolar',
        value: 'Transporte Escolar',
      },
      {
        label: 'Caminando',
        value: 'Caminando',
      },
    ];

    this.listGustosNino = [
      {
        label: 'Jugar con sus padres',
        value: 'Jugar con sus padres',
      },
      {
        label: 'Con amigos',
        value: 'Con amigos',
      },
      {
        label: 'Con hermanos',
        value: 'Con hermanos',
      },
      {
        label: 'Mascotas',
        value: 'Mascotas',
      },
      {
        label: 'Computadoras',
        value: 'Computadoras',
      },
      {
        label: 'DS, Wii, MP4',
        value: 'DS, Wii, MP4',
      },
      {
        label: 'Ver televisión',
        value: 'Ver televisión',
      },
      {
        label: 'Celular',
        value: 'Celular',
      },
    ];

    this.listActividades = [
      {
        label: 'Ir al baño',
        value: 'Ir al baño',
      },
      {
        label: 'Bañarse',
        value: 'Bañarse',
      },
      {
        label: 'Comer',
        value: 'Comer',
      },
      {
        label: 'Vestirse',
        value: 'Vestirse',
      },
      {
        label: 'Expresarse oralmente',
        value: 'Expresarse oralmente',
      },
      {
        label: 'Hacer tareas',
        value: 'Hacer tareas',
      },
    ];

    this.listNecesidadesCompromiso = [
      {
        label: 'Visual',
        value: 'Visual',
      },
      {
        label: 'Auditiva',
        value: 'Auditiva',
      },
      {
        label: 'Psicomotor',
        value: 'Psicomotor',
      },
      {
        label: 'Atencion',
        value: 'Atencion',
      },
      {
        label: 'Lenguaje',
        value: 'Lenguaje',
      },
      {
        label: 'Cognitivo',
        value: 'Cognitivo',
      },
      {
        label: 'Otros ',
        value: 'Otros ',
      },
    ];

    this.listTipoSeguro = [
      {
        label: 'Privado',
        value: 'Privado',
      },
      {
        label: 'S.S.O',
        value: 'S.S.O',
      },
      {
        label: 'IPASME',
        value: 'IPASME',
      },
      {
        label: 'IPSFA',
        value: 'IPSFA',
      },
      {
        label: 'Otros',
        value: 'Otros',
      },
    ];

    this.listEnfermedadesNino = [
      {
        label: 'Sarampion',
        value: 'Sarampion',
      },
      {
        label: 'Lechina',
        value: 'Lechina',
      },
      {
        label: 'Parotiditis',
        value: 'Parotiditis',
      },
      {
        label: 'Rubeola',
        value: 'Rubeola',
      },
      {
        label: 'Tosferina',
        value: 'Tosferina',
      },
      {
        label: 'Meninguitis',
        value: 'Meninguitis',
      },
      {
        label: 'Hepatitis A',
        value: 'Hepatitis A',
      },
      {
        label: 'Hepatitis B',
        value: 'Hepatitis B',
      },
      {
        label: 'Otros',
        value: 'Otros',
      },
    ];

    this.listEnfermedadesEmbarazo = [
      {
        label: 'Rubeola',
        value: 'Rubeola',
      },
      {
        label: 'Anemia',
        value: 'Anemia',
      },
      {
        label: 'Toxoplasmosis',
        value: 'Toxoplasmosis',
      },
      {
        label: 'Hipertesion',
        value: 'Hipertesion',
      },
      {
        label: 'Otras',
        value: 'Otras',
      },
    ];

    this.listAntecedentesPerinatales = [
      {
        label: 'Normal',
        value: 'Normal',
      },
      {
        label: 'Cesarea',
        value: 'Cesarea',
      },
      {
        label: 'Prematuro',
        value: 'Prematuro',
      },
      {
        label: 'Forceps',
        value: 'Forceps',
      },
      {
        label: 'A termino',
        value: 'A termino',
      },
    ];

    this.listActividadesReligion = [
      {
        label: 'Ayudar a los necesitados',
        value: 'Ayudar a los necesitados',
      },
      {
        label: 'Cantar en el coro',
        value: 'Cantar en el coro',
      },
    ];

    this.listTipoVivienda = [
      {
        label: 'Rancho',
        value: 'Rancho',
      },
      {
        label: 'Casa',
        value: 'Casa',
      },
      {
        label: 'Quinta',
        value: 'Quinta',
      },
      {
        label: 'Apartamento',
        value: 'Apartamento',
      },
    ];

    this.listTenencia = [
      {
        label: 'Propia',
        value: 'Propia',
      },
      {
        label: 'Alquilada',
        value: 'Alquilada',
      },
      {
        label: 'Opcion a Compra',
        value: 'Opcion a Compra',
      },
      {
        label: 'Compartida',
        value: 'Compartida',
      },
      {
        label: 'Invadida',
        value: 'Invadida',
      },
    ];

    this.listGradoInstruccion = [
      {
        label: 'Primaria',
        value: 'Primaria',
      },
      {
        label: 'Bachiller',
        value: 'Bachiller',
      },
      {
        label: 'Universitario',
        value: 'Universitario',
      },
      {
        label: 'Otro',
        value: 'Otro',
      },
    ];

    this.listEnfermedades = [
      {
        label: 'Covid',
        value: 'Covid',
      },
    ];

    this.listEstadoCivil = [
      {
        label: 'Soltera',
        value: 'S',
      },
      {
        label: 'Casada',
        value: 'C',
      },
      {
        label: 'Divorciada',
        value: 'D',
      },
      {
        label: 'Otro',
        value: 'Otro',
      },
    ];

    this.listParentesco = [
      {
        label: 'Primo',
        value: 'Primo',
      },
      {
        label: 'Tio',
        value: 'Tio',
      },
    ];

    this.listDeporte = [
      {
        label: 'Futbol',
        value: 'Futbol',
      },
      {
        label: 'Basekt',
        value: 'Basekt',
      },
      {
        label: 'Natación',
        value: 'Natación',
      },
    ];

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

  detectedDateMadre(e) {
    this.f.fechaNacimientoMadre.markAllAsTouched();
  }

  getDateMadre(e) {
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

  detectedDatePadre(e) {
    this.f.fechaNacimientoPadre.markAllAsTouched();
  }

  getDatePadre(e) {
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

  detectedDateTratamiento(e) {
    this.f.tratamientoFecha.markAllAsTouched();
  }

  getDateTratamiento(e) {
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

  getDateRepLegal(e) {
    this.f.representanteLegalFechaNacimiento.markAllAsTouched();
  }

  detectedDateRepLegal(e) {
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

  recivedData(data) {
    this.controlInscripcion = [];

    data.forEach((element) => {
      let nombre = element.nombre.split(' ');
      this.controlInscripcion.push({
        grado: element.grado,
        anhoEscolar: element.anoEscolar,
        fechaInscripcion: element.fechaInscripcion,
        docente: {
          nombre: nombre[0],
          apellido: nombre[1],
        },
      });
    });
  }
}
