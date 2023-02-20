import { DashboardService } from './../../services/dashboard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { differenceInCalendarDays } from 'date-fns';
import { DatePipe } from '@angular/common';
import { Plantilla } from 'src/app/model/Plantilla';

@Component({
  selector: 'add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss'],
})
export class AddStudentsComponent implements OnInit {
  @Output() backListStudents = new EventEmitter<any>();

  formAddStudent: FormGroup;
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
  listUpdateData = [];
  listRetiroData = [];
  controlInscripcion = [];
  tableHeaders = [];
  tableHeadersUpdateData = [];
  tableHeadersRetiroData = [];
  actualizacionDatos = [];
  controlRetiro;
  minEstatura = 0.5;

  today = new Date();

  constructor(
    public fb: FormBuilder,
    public datePipe: DatePipe,
    public apiDashboard: DashboardService
  ) {
    this.formAddStudent = this.fb.group({
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      tipoCedula: ['', Validators.required],
      cedula: ['', Validators.required],
      grupoSanguineo: ['', Validators.required],
      lugarNacimiento: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      direccionHabitacion: ['', Validators.required],
      parroquia: ['', Validators.required],
      municipio: ['', Validators.required],
      pais: ['', Validators.required],
      estadoNacimiento: ['', Validators.required],
      telefonoResidencialNino: [
        '',
        [Validators.required, Validators.minLength(11)],
      ],
      correo: ['', Validators.required],
      poseeCanaima: ['', Validators.required],
      serialCanaima: ['', Validators.required],
      nuevoIngreso: ['', Validators.required],
      institucionProcedencia: ['', Validators.required],
      razonInscripcion: ['', Validators.required],
      gradoCursar: ['', Validators.required],
      repitiente: ['', Validators.required],
      regular: ['', Validators.required],
      tallaCamisa: ['', Validators.required],
      estatura: ['', Validators.required],
      peso: ['', Validators.required],
      tallaPantalon: ['', Validators.required],
      calzado: ['', Validators.required],
      nombreEmergencia: ['', Validators.required],
      parentesco: ['', Validators.required],
      telefonoResidencial: [
        '',
        [Validators.required, Validators.minLength(11)],
      ],
      telefonoCelular: ['', [Validators.required, Validators.minLength(11)]],
      poseeHermanos: ['', Validators.required],
      cantidadHermanos: ['', Validators.required],
      gradoCursan: [[''], Validators.required],
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

    //INVERTIR LOS HEADERS

    this.tableHeadersUpdateData = [
      'Grado',
      'Estatura',
      'Peso',
      'Calzado',
      'Talla Camisa',
      'Talla Pantalon',
    ];

    this.tableHeadersRetiroData = [
      'Retiro',
      'Fecha',
      'Motivo',
      'Institución donde va a estudiar',
      'Nombre del representante',
      'Cedular del representante',
    ];

    // for (let i = 0; i < 5; i++) {
    //   this.listEstudiantes.push({
    //     id: i,
    //     grado: '1',
    //     anoEscolar: '2023-2024',
    //     fechaInscripcion: '2023/09/16',
    //     nombre: 'Petra Perez',
    //   });
    // }

    this.listUpdateData = [
      {
        id: 0,
        grado: '1°',
        estatura: '',
        peso: '',
        calzado: '',
        tallaCamisa: '',
        tallaPantalon: '',
      },
      {
        id: 1,
        grado: '2°',
        estatura: '',
        peso: '',
        calzado: '',
        tallaCamisa: '',
        tallaPantalon: '',
      },
      {
        id: 2,
        grado: '3°',
        estatura: '',
        peso: '',
        calzado: '',
        tallaCamisa: '',
        tallaPantalon: '',
      },
      {
        id: 3,
        grado: '4°',
        estatura: '',
        peso: '',
        calzado: '',
        tallaCamisa: '',
        tallaPantalon: '',
      },
      {
        id: 4,
        grado: '5°',
        estatura: '',
        peso: '',
        calzado: '',
        tallaCamisa: '',
        tallaPantalon: '',
      },
      {
        id: 5,
        grado: '6°',
        estatura: '',
        peso: '',
        calzado: '',
        tallaCamisa: '',
        tallaPantalon: '',
      },
    ];

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
    return this.formAddStudent.controls;
  }

  ngOnInit(): void {
    // this.formAddStudent.valueChanges.subscribe((resp) => {
    //   console.log(this.f);
    // });
    // this.setReadOnly();
  }

  setReadOnly() {
    for (var control in this.formAddStudent.controls) {
      this.formAddStudent.controls[control].disable();
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

    console.log('Data del control de inscripcion:', this.controlInscripcion);
  }

  recivedUpdateData(data) {
    this.actualizacionDatos = [];

    data.forEach((element) => {
      let grado = element.grado.replace('°', '');
      this.actualizacionDatos.push({
        grado: grado,
        estatura: parseInt(element.estatura)
          ? parseInt(element.estatura)
          : null,
        peso: parseInt(element.peso) ? parseInt(element.peso) : null,
        calzado: parseInt(element.calzado) ? parseInt(element.calzado) : null,
        tallaCamisa: element.tallaCamisa ? element.tallaCamisa : null,
        tallaPantalon: parseInt(element.tallaPantalon)
          ? parseInt(element.tallaPantalon)
          : null,
      });
    });
    console.log('Actualizar datos:', this.actualizacionDatos);
  }

  recivedRetiroData(data) {
    console.log(data);

    this.controlRetiro = {
      retiro: data.retiro,
      fecha: data.fecha,
      motivo: data.motivo,
      institutoAEstudiar: data.institutoAEstudiar,
      representante: {
        nombre: data.nombreRepresentante,
        cedula: data.cedulaRepresentante,
      },
    };
  }

  backStep() {
    this.backListStudents.emit();
  }

  addStudents() {
    console.log(this.formAddStudent.value);

    let body = {
      datosPersonales: {
        nombre: this.f.nombre.value,
        apellido: this.f.apellido.value,
        cedula: {
          tipo: this.f.tipoCedula.value,
          numero: this.f.cedula.value,
        },
        grupoSanguineo: this.f.grupoSanguineo.value,
        sexo: this.f.sexo.value,
        fechaNacimiento: this.f.fechaNacimiento.value,
        lugarNacimiento: this.f.lugarNacimiento.value,
        direccionHabitacion: this.f.direccionHabitacion.value,
        parroquia: this.f.parroquia.value,
        municipio: this.f.municipio.value,
        pais: this.f.pais.value,
        estadoNacimiento: this.f.estadoNacimiento.value,
        telefonoResidencial: this.f.telefonoResidencialNino.value,
        canaima: {
          posee: this.f.poseeCanaima.value,
          serial: this.f.serialCanaima.value,
        },
        correo: this.f.correo.value,
        nuevoIngreso: this.f.nuevoIngreso.value,
        institucionProcedencia: this.f.institucionProcedencia.value,
        razonInscripcion: this.f.razonInscripcion.value,
        gradoCursar: this.f.gradoCursar.value,
        repitiente: this.f.repitiente.value,
        regular: this.f.regular.value,
        tallaCamisa: this.f.tallaCamisa.value,
        estatura: this.f.estatura.value,
        peso: this.f.peso.value,
        tallaPantalon: this.f.tallaPantalon.value,
        calzado: this.f.calzado.value,
        hermanosInstitucion: {
          posee: this.f.poseeHermanos.value,
          cantidad: this.f.cantidadHermanos.value,
          gradoCursan: this.f.gradoCursan.value,
        },
        personaEmergencia: {
          nombre: this.f.nombreEmergencia.value,
          parentesco: this.f.parentesco.value,
          telefonoResidencial: this.f.telefonoResidencial.value,
          telefonoCelular: this.f.telefonoCelular.value,
        },
      },
      aspectosSociales: {
        viveNinho: {
          madre: this.f.mama.value,
          padre: this.f.papa.value,
          otros: this.f.otros.value,
        },
        totalPersonasHogar: this.f.totalPersona.value,
        hermanos: {
          cantidad: this.f.numeroHermanos.value,
          lugarOcupaNinho: this.f.lugarOcupaNino.value,
          descripcionRelacion: this.f.descripcionRelacion.value,
        },
        otrosFamiliaresHogar: {
          viven: this.f.viven.value,
          parentesco: this.f.vivenParentesco.value,
          descripcionRelacion: this.f.descripcionRelacionOtros.value,
        },
        personaPostClases: this.f.personaPostClases.value,
        acompanhanteTareas: this.f.acompananteTareas.value,
        deportesPractica: this.f.deportesPractica.value,
        horarioPractica: this.f.horarioPractica.value,
        talentoActitud: [],
        beca: false,
        lecturaHogar: {
          practica: false,
          tipo: '',
        },
        trabajo: {
          ejerce: true,
          funciones: '',
        },
      },
      identificacionPadres: {
        madre: {
          apellido: this.f.apellidosMadre.value,
          nombre: this.f.nombresMadre.value,
          cedula: {
            tipo: this.f.tipoCedulaMadre.value,
            numero: this.f.cedulaMadre.value,
          },
          fechaNacimiento: this.f.fechaNacimientoMadre.value,
          estadoCivil: this.f.estadoCivilMadre.value,
          edad: this.f.edadMadre.value,
          lugarNacimiento: this.f.lugarNacimientoMadre.value,
          profesion: this.f.profesionMadre.value,
          ingresoEconomico: this.f.ingresoEconomicoMadre.value,
          telefonoResidencial: this.f.telResidencialMadre.value,
          telefonoCelular: this.f.telCelularMadre.value,
          trabajo: {
            lugar: this.f.lugarTrabajoMadre.value,
            telefono: this.f.telefonoTrabajoMadre.value,
          },
          direccionHabitacion: this.f.direccionHabitacionMadre.value,
          enfermedadesPadecidas: this.f.enfermedadesPadecidasMadre.value,
          viveConNinho: this.f.viveNinoMadre.value,
          gradoInstruccion: this.f.gradoInstruccionMadre.value,
          vivienda: {
            tenencia: this.f.viviendaTenencia.value,
            tipo: this.f.viviendaTipo.value,
          },
          religion: this.f.religionMadre.value,
          actividades: this.f.actividadesReligionMadre.value,
          misionSocial: {
            posee: this.f.misionSocialPosee.value,
            descripcion: this.f.misionSocialDescripcion.value,
          },
          correo: this.f.correoMadre.value,
          relacionNinho: this.f.relacionMadreNino.value,
        },
        padre: {
          apellido: this.f.apellidosPadre.value,
          nombre: this.f.nombresPadre.value,
          cedula: {
            tipo: this.f.tipoCedulaPadre.value,
            numero: this.f.cedulaPadre.value,
          },
          fechaNacimiento: this.f.fechaNacimientoPadre.value,
          estadoCivil: this.f.estadoCivilPadre.value,
          lugarNacimiento: this.f.lugarNacimientoPadre.value,
          profesion: this.f.profesionPadre.value,
          edad: this.f.edadPadre.value,
          ingresoEconomico: this.f.ingresoEconomicoPadre.value,
          telefonoResidencial: this.f.telResidencialPadre.value,
          telefonoCelular: this.f.telCelularPadre.value,
          trabajo: {
            lugar: this.f.lugarTrabajoPadre.value,
            telefono: this.f.telefonoTrabajoPadre.value,
          },
          enfermedadesPadecidas: this.f.enfermedadesPadecidasPadre.value,
          correo: this.f.correoPadre.value,
          viveConNinho: this.f.viveNinoPadre.value,
          gradoInstruccion: this.f.gradoInstruccionPadre.value,
          relacionNinho: this.f.relacionPadreNino.value,
        },
      },
      aspectosSalud: {
        enfermedadesEmbarazo: this.f.enfermedadesEmbarazo.value,
        antecedentesPerinatales: this.f.antecedentesPerinatales.value,
        antecedentesPostNatales: this.f.antecedentesPostNatales.value,
        problemasNacimiento: this.f.problemasNacimiento.value,
        pesoNacimiento: this.f.pesoNacimiento.value,
        tallaNacimiento: this.f.tallaNacimiento.value,
        lloroNacer: this.f.lloroNacer.value,
        gatear: {
          gateo: this.f.gatearGateo.value,
          edad: this.f.gatearEdad.value,
        },
        edadCaminar: this.f.edadCaminar.value,
        familiarDiscapacidad: {
          posee: this.f.familiarDiscapacidadPosee.value,
          descripcion: this.f.familiarDiscapacidadDescripcion.value,
        },
        enfermedadesNinho: this.f.enfermedadesNino.value,
        vacunasRecibidas: this.f.vacunasRecibidas.value,
        habitosAlimenticios: {
          alimentos: {
            comeTodo: this.f.alimentosComeTodo.value,
            tipo: this.f.alimentosTipo.value,
          },
          alergia: {
            posee: this.f.alergiaPosee.value,
            descripcion: this.f.alergiaDescripcion.value,
            alimentos: this.f.alergiaAlimentos.value,
          },
          condicionEspecial: this.f.condicionEspecial.value,
          objetosRecetados: {
            zapatosOrtopedicos: this.f.objetosRecetadosZapatos.value,
            lentesRecetados: this.f.objetosRecetadosLentes.value,
            otros: this.f.objetosRecetadosOtros.value,
          },
          tratamiento: {
            recibe: this.f.tratamientoRecibe.value,
            nombre: this.f.tratamientoNombre.value,
            motivo: this.f.tratamientoMotivo.value,
            medico: this.f.tratamientoMedico.value,
            especialidad: this.f.tratamientoEspecialidad.value,
            fechaInicio: this.f.tratamientoFecha.value,
          },
          asegurado: {
            seguro: this.f.aseguradoSeguro.value,
            tipo: this.f.aseguradoTipo.value,
          },
          desarrolloLenguajeMotor: {
            edadHablo: this.f.desarrolloLenguajeEdadHablo.value,
            duermeBien: this.f.desarrolloLenguajeDuermeBien.value,
            alteraFacil: this.f.desarrolloLenguajeAlteraFacil.value,
            manoTrabajar: this.f.desarrolloLenguajeManoTrabaja.value,
          },
          necesidadesCompromiso: this.f.necesidadesCompromiso.value,
        },
      },
      representanteLegal: {
        apellido: this.f.representanteLegalApellidos.value,
        nombre: this.f.representanteLegalNombre.value,
        cedula: {
          tipo: this.f.representanteLegalTipo.value,
          numero: this.f.representanteLegalCedula.value,
        },
        fechaNacimiento: this.f.representanteLegalFechaNacimiento.value,
        edad: this.f.representanteLegalEdad.value,
        parentesco: this.f.representanteLegalParentesco.value,
        lugarNacimiento: this.f.representanteLegalLugarNacimiento.value,
        profesion: this.f.representanteLegalProfesion.value,
        correo: this.f.representanteLegalCorreo.value,
        estadoCivil: this.f.representanteLegalEstadoCivil.value,
        ingresoEconomico: this.f.representanteLegalIngresoEconomico.value,
        direccionHabitacion: this.f.representanteLegalDireccionHabitacion.value,
        viveConNinho: this.f.representanteLegalViveConNino.value,
        telefonoResidencial: this.f.representanteLegalTelCasa.value,
        telefonoCelular: this.f.representanteLegalTelCelular.value,
        trabajo: {
          lugar: this.f.representanteLegalLugarTrabajo.value,
          telefono: this.f.representanteLegalTelTrabajo.value,
        },
        razonRepresenta: this.f.representanteLegalRazonRepresenta.value,
      },
      otrosDatos: {
        actividadesIndependientes: this.f.actividadesIndependientes.value,
        personaCuidaNinhoHogar: this.f.personaCuidaNinoHogar.value,
        gustosNinho: {
          gustos: this.f.gustosNino.value,
          horas: this.f.gustosNinoHoras.value,
        },
        retiraSoloInstitucion: {
          retira: this.f.retiraSoloInstitucion.value,
          razon: this.f.retiraSoloInstitucionRazon.value,
        },
        responsableRetiro: {
          nombre: this.f.responsableRetiroNombre.value,
          cedula: this.f.responsableRetiroCedula.value,
        },
        transporteEscuela: {
          medio: this.f.transporteEscuelaMedio.value,
          via: this.f.transporteEscuelaVia.value,
        },
        gradoReprobado: {
          reprobado: this.f.gradoReprobado.value,
          grado: this.f.gradoReprobadoGrado.value,
        },
        cumpleNormasHogar: this.f.cumpleNormasHogar.value,
        firmaActaCompromiso: this.f.firmaActaCompromiso.value,
      },
      controlInscripcion: this.controlInscripcion,
      actualizacionDatos: this.actualizacionDatos,
      controlRetiro: this.controlRetiro,
    };
    this.apiDashboard.addStudents(body).subscribe(
      (resp) => {
        this.backListStudents.emit();
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
