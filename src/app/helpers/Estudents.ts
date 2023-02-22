// Generated by https://quicktype.io

export interface ListAllStudents {
  docs: Student[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
}

export interface Student {
  datosPersonales: DatosPersonales;
  aspectosSociales: AspectosSociales;
  identificacionPadres: IdentificacionPadres;
  aspectosSalud: AspectosSalud;
  representanteLegal: RepresentanteLegal;
  otrosDatos: OtrosDatos;
  controlRetiro: ControlRetiro;
  _id: string;
  controlInscripcion: ControlInscripcion[];
  actualizacionDatos: ActualizacionDato[];
  createdAt: string;
  updatedAt: string;
}

export interface ActualizacionDato {
  grado: string;
  estatura: number;
  peso: number;
  calzado: number;
  tallaCamisa: string;
  tallaPantalon: number;
}

export interface AspectosSalud {
  gatear: Gatear;
  familiarDiscapacidad: FamiliarDiscapacidad;
  habitosAlimenticios: HabitosAlimenticios;
  enfermedadesEmbarazo: string[];
  antecedentesPerinatales: AntecedentesPerinatale[];
  antecedentesPostNatales: string;
  problemasNacimiento: string;
  pesoNacimiento: number;
  tallaNacimiento: number;
  lloroNacer: boolean;
  edadCaminar: number;
  enfermedadesNinho: string[];
  vacunasRecibidas: string[];
}

export enum AntecedentesPerinatale {
  ATermino = 'A termino',
  Cesarea = 'Cesarea',
  Forceps = 'Forceps',
  Normal = 'Normal',
  Prematuro = 'Prematuro',
}

export interface FamiliarDiscapacidad {
  posee: boolean;
  descripcion: string;
}

export interface Gatear {
  gateo: boolean;
  edad: number;
}

export interface HabitosAlimenticios {
  alimentos: Alimentos;
  alergia: Alergia;
  objetosRecetados: ObjetosRecetados;
  tratamiento: Tratamiento;
  asegurado: Asegurado;
  desarrolloLenguajeMotor: DesarrolloLenguajeMotor;
  condicionEspecial: string;
  necesidadesCompromiso: string[];
}

export interface Alergia {
  posee: boolean;
  descripcion: string;
  alimentos: string;
}

export interface Alimentos {
  comeTodo: boolean;
  tipo: string;
}

export interface Asegurado {
  seguro: boolean;
  tipo: string[];
}

export interface DesarrolloLenguajeMotor {
  edadHablo: number;
  duermeBien: string;
  alteraFacil: boolean;
  manoTrabajar: ManoTrabajar;
}

export enum ManoTrabajar {
  Derecha = 'Derecha',
  Izquierda = 'Izquierda',
}

export interface ObjetosRecetados {
  zapatosOrtopedicos: boolean;
  lentesRecetados: boolean;
  otros: string;
}

export interface Tratamiento {
  recibe: boolean;
  nombre: string;
  motivo: string;
  medico: string;
  especialidad: string;
  fechaInicio: string;
}

export interface AspectosSociales {
  viveNinho: ViveNinho;
  hermanos: Hermanos;
  otrosFamiliaresHogar: OtrosFamiliaresHogar;
  lecturaHogar: LecturaHogar;
  trabajo: AspectosSocialesTrabajo;
  totalPersonasHogar: number;
  personaPostClases: string;
  acompanhanteTareas: string;
  deportesPractica: string[];
  horarioPractica: string;
  talentoActitud: string[];
  beca: boolean;
}

export interface Hermanos {
  cantidad: number;
  lugarOcupaNinho: string;
  descripcionRelacion: string;
}

export interface LecturaHogar {
  practica: boolean;
  tipo: string;
}

export interface OtrosFamiliaresHogar {
  viven: boolean;
  parentesco: string[];
  descripcionRelacion: string;
}

export interface AspectosSocialesTrabajo {
  ejerce: boolean;
  funciones: string;
}

export interface ViveNinho {
  madre: boolean;
  padre: boolean;
  otros: string;
}

export interface ControlInscripcion {
  docente: Docente;
  grado: string;
  anhoEscolar: string;
  fechaInscripcion: string;
}

export enum AnhoEscolar {
  The20222023 = '2022-2023',
}

export interface Docente {
  nombre: string;
  apellido: string;
}

export interface ControlRetiro {
  representante: Representante;
  retiro: boolean;
  fecha: string;
  motivo: string;
  institutoAEstudiar: string;
}

export interface Representante {
  nombre: string;
  cedula: string;
}

export interface DatosPersonales {
  cedula: Cedula;
  canaima: Canaima;
  hermanosInstitucion: HermanosInstitucion;
  personaEmergencia: PersonaEmergencia;
  nombre: string;
  apellido: string;
  grupoSanguineo: string;
  sexo: Sexo;
  fechaNacimiento: string;
  lugarNacimiento: string;
  direccionHabitacion: string;
  parroquia: string;
  municipio: string;
  pais: string;
  estadoNacimiento: string;
  telefonoResidencial: string;
  correo: string;
  nuevoIngreso: boolean;
  institucionProcedencia: string;
  razonInscripcion: string;
  gradoCursar: string;
  repitiente: boolean;
  regular: boolean;
  tallaCamisa: string;
  estatura: number;
  peso: number;
  tallaPantalon: number;
  calzado: number;
  edad: number;
}

export interface Canaima {
  posee: boolean;
  serial: string;
}

export interface Cedula {
  tipo: Tipo;
  numero: string;
}

export enum Tipo {
  E = 'E',
  V = 'V',
}

export interface HermanosInstitucion {
  posee: boolean;
  cantidad: number;
  gradoCursan: string[];
}

export interface PersonaEmergencia {
  nombre: string;
  parentesco: string;
  telefonoResidencial: string;
  telefonoCelular: string;
}

export enum Sexo {
  Femenino = 'Femenino',
  Masculino = 'Masculino',
}

export interface IdentificacionPadres {
  madre: RepresentanteLegal;
  padre: RepresentanteLegal;
}

export interface RepresentanteLegal {
  cedula: Cedula;
  trabajo: RepresentanteLegalTrabajo;
  vivienda?: Vivienda;
  misionSocial?: FamiliarDiscapacidad;
  apellido: string;
  nombre: string;
  fechaNacimiento: string;
  estadoCivil: EstadoCivil;
  edad: number;
  lugarNacimiento: string;
  profesion: string;
  ingresoEconomico: number;
  telefonoResidencial: string;
  telefonoCelular: string;
  direccionHabitacion?: string;
  enfermedadesPadecidas?: EnfermedadesPadecida[];
  viveConNinho: boolean;
  gradoInstruccion?: GradoInstruccion;
  religion?: string;
  actividades?: string[];
  correo: string;
  relacionNinho?: string;
  parentesco?: string;
  razonRepresenta?: string;
}

export enum EnfermedadesPadecida {
  Chikungunya = 'Chikungunya',
  Covid = 'Covid',
  Fiebre = 'Fiebre',
  Neumonia = 'Neumonia',
  Otro = 'Otro',
}

export enum EstadoCivil {
  C = 'C',
  D = 'D',
  Otro = 'Otro',
  S = 'S',
}

export enum GradoInstruccion {
  Bachiller = 'Bachiller',
  Otro = 'Otro',
  Primaria = 'Primaria',
  Universitario = 'Universitario',
}

export interface RepresentanteLegalTrabajo {
  lugar: string;
  telefono: string;
}

export interface Vivienda {
  tenencia: string;
  tipo: string;
}

export interface OtrosDatos {
  gustosNinho: GustosNinho;
  retiraSoloInstitucion: RetiraSoloInstitucion;
  responsableRetiro: Representante;
  transporteEscuela: TransporteEscuela;
  gradoReprobado: GradoReprobado;
  actividadesIndependientes: ActividadesIndependiente[];
  personaCuidaNinhoHogar: string;
  cumpleNormasHogar: boolean;
  firmaActaCompromiso: boolean;
}

export enum ActividadesIndependiente {
  Bañarse = 'Bañarse',
  Comer = 'Comer',
  ExpresarseOralmente = 'Expresarse oralmente',
  HacerTareas = 'Hacer tareas',
  IRAlBaño = 'Ir al baño',
  Vestirse = 'Vestirse',
}

export interface GradoReprobado {
  reprobado: boolean;
  grado: string;
}

export interface GustosNinho {
  gustos: Gusto[];
  horas: number;
}

export enum Gusto {
  Celular = 'Celular',
  Computadora = 'Computadora',
  DSWiiMP = 'DS, Wii, MP',
  JugarConAmigos = 'Jugar con amigos',
  JugarConLosHermanos = 'Jugar con los hermanos',
  JugarConSUSPadres = 'Jugar con sus padres',
  Mascotas = 'Mascotas',
  VerTelevision = 'Ver television',
}

export interface RetiraSoloInstitucion {
  retira: boolean;
  razon: string;
}

export interface TransporteEscuela {
  medio: Medio;
  via: string;
}

export enum Medio {
  Privado = 'Privado',
  Publico = 'Publico',
  TransporteEscolar = 'Transporte Escolar',
}

export const getListAllStudents = (): ListAllStudents => {
  return {
    docs: [],
    totalDocs: 154,
    limit: 1,
    totalPages: 154,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: true,
    prevPage: null,
    nextPage: 2,
  };
};

export const getNewStudent = (): Student => {
  return {
    datosPersonales: {
      cedula: {
        tipo: Tipo.E,
        numero: '36569764',
      },
      canaima: {
        posee: false,
        serial: '81c4fed9-8eec-4a2b-865c-163a1bb8f646',
      },
      hermanosInstitucion: {
        posee: true,
        cantidad: 10,
        gradoCursan: [],
      },
      personaEmergencia: {
        nombre: 'Penny Loya',
        parentesco: 'Herman@',
        telefonoResidencial: '04268111763',
        telefonoCelular: '04147257319',
      },
      nombre: 'Sergio',
      apellido: 'Kuzmina',
      grupoSanguineo: 'O+',
      sexo: Sexo.Femenino,
      fechaNacimiento: '2018-01-15T14:52:54.257Z',
      lugarNacimiento: 'Miramar',
      direccionHabitacion: 'Partida Javier, 0 Puerta 403',
      parroquia: 'Rioverde-Ciudad Fernández',
      municipio: 'León',
      pais: 'República Checa',
      estadoNacimiento: 'Baja California Sur',
      telefonoResidencial: '02760049168',
      correo: 'hugo_huixtlacatl@example.com',
      nuevoIngreso: true,
      institucionProcedencia: 'Incorporación Abaldonamiento Batazo.',
      razonInscripcion: 'Batallador Abajar Engarzador Incorpóreo Cenata.',
      gradoCursar: '5',
      repitiente: false,
      regular: false,
      tallaCamisa: 'S',
      estatura: 0.71,
      peso: 38.3,
      tallaPantalon: 26,
      calzado: 31,
      edad: 5,
    },
    aspectosSociales: {
      viveNinho: {
        madre: true,
        padre: false,
        otros: 'Amig@',
      },
      hermanos: {
        cantidad: 1,
        lugarOcupaNinho: 'Cendradilla',
        descripcionRelacion: 'Engarzador Fideicomitente Engarronar.',
      },
      otrosFamiliaresHogar: {
        viven: true,
        parentesco: [],
        descripcionRelacion: 'Descensión Bastonear Fideicomisario Abaco Batán.',
      },
      lecturaHogar: {
        practica: true,
        tipo: 'Cencuate Gemólogo Increíble.',
      },
      trabajo: {
        ejerce: true,
        funciones: 'Cendolilla Abalanzar Incremento.',
      },
      totalPersonasHogar: 8,
      personaPostClases: 'Prim@',
      acompanhanteTareas: 'Ti@',
      deportesPractica: ['Basquet', 'Danza', 'Futbol', 'Atletismo', 'Beisbol'],
      horarioPractica: '2pm-5pm',
      talentoActitud: [
        'Tocar guitarra',
        'Dibujar',
        'Escribir',
        'Bailar',
        'Cantar',
      ],
      beca: false,
    },
    identificacionPadres: {
      madre: {
        cedula: {
          tipo: Tipo.E,
          numero: '36663438',
        },
        trabajo: {
          lugar: 'Gallardo y Zamudio',
          telefono: '02789275642',
        },
        vivienda: {
          tenencia: 'Propia',
          tipo: 'Rancho',
        },
        misionSocial: {
          posee: true,
          descripcion: 'Descepar Batatazo Abada Geminación Engaritar.',
        },
        apellido: 'Limón',
        nombre: 'Priscilla',
        fechaNacimiento: '1990-06-29T09:55:01.966Z',
        estadoCivil: EstadoCivil.D,
        edad: 46,
        lugarNacimiento: 'Navojoa',
        profesion: 'Gerente Tácticas Scrum Master',
        ingresoEconomico: 16821406,
        telefonoResidencial: '04169239210',
        telefonoCelular: '04267705204',
        direccionHabitacion: 'Colegio Gonzalo Menchaca 438 Esc. 046',
        enfermedadesPadecidas: [],
        viveConNinho: false,
        gradoInstruccion: GradoInstruccion.Bachiller,
        religion: 'Descenso',
        actividades: ['Actividad 1', 'Otros', 'Actividad 3'],
        correo: 'francisca42@example.net',
        relacionNinho: 'Geminar Descerrajadura Gémino Batallar.',
      },
      padre: {
        cedula: {
          tipo: Tipo.V,
          numero: '36540601',
        },
        trabajo: {
          lugar: 'Carbajal S.A.',
          telefono: '02786294562',
        },
        apellido: 'Escobar',
        nombre: 'Alex',
        fechaNacimiento: '1983-03-22T15:27:23.109Z',
        estadoCivil: EstadoCivil.D,
        lugarNacimiento: 'San Pedro Garza García',
        profesion: 'Heredado Infraestructura Arquitecto',
        edad: 31,
        ingresoEconomico: 1884653,
        telefonoResidencial: '04263405755',
        telefonoCelular: '04249974741',
        enfermedadesPadecidas: [],
        correo: 'rosamara53@example.net',
        viveConNinho: true,
        gradoInstruccion: GradoInstruccion.Otro,
        relacionNinho: 'Incorruptible Cendrazo Abacalero Incorporo.',
      },
    },
    aspectosSalud: {
      gatear: {
        gateo: true,
        edad: 7,
      },
      familiarDiscapacidad: {
        posee: false,
        descripcion: 'Engaritar Bátavo Fichaje Gemonias Abadí.',
      },
      habitosAlimenticios: {
        alimentos: {
          comeTodo: true,
          tipo: 'Gemonias Bateador Cenefa Descensión Cencío.',
        },
        alergia: {
          posee: true,
          descripcion: 'Engarfiar Fidecomiso Gemonias Engarfiar Cencerrón.',
          alimentos: '',
        },
        objetosRecetados: {
          zapatosOrtopedicos: true,
          lentesRecetados: true,
          otros: 'Abaldonadamente Batallador Engarrotar',
        },
        tratamiento: {
          recibe: true,
          nombre: 'Engarzadura Engarbullar Cencerrada Abadiato Gemoterapia.',
          motivo: 'Bátavo Increado Céndea Abad Cencerrado.',
          medico: 'Helen Echevarría',
          especialidad: 'Batanear Basural Generación.',
          fechaInicio: '2015-10-17T03:29:11.970Z',
        },
        asegurado: {
          seguro: true,
          tipo: [],
        },
        desarrolloLenguajeMotor: {
          edadHablo: 17,
          duermeBien: 'Engarro Gemólogo Descharchar.',
          alteraFacil: true,
          manoTrabajar: ManoTrabajar.Izquierda,
        },
        condicionEspecial: 'Gendarmería Generador Descentralizador',
        necesidadesCompromiso: [
          'Cognitivo',
          'Otros',
          'Lenguaje',
          'Psicomotor',
          'Visual',
          'Auditiva',
          'Atencion',
        ],
      },
      enfermedadesEmbarazo: [],
      antecedentesPerinatales: [],
      antecedentesPostNatales: 'Cencerrón Increpar Engarrar.',
      problemasNacimiento: 'Cenefa Fidalgo Fichaje.',
      pesoNacimiento: 0.3,
      tallaNacimiento: 10,
      lloroNacer: true,
      edadCaminar: 9,
      enfermedadesNinho: ['Otras'],
      vacunasRecibidas: ['Meninguitis', 'Parotiditis', 'Otras'],
    },
    representanteLegal: {
      cedula: {
        tipo: Tipo.V,
        numero: '38355265',
      },
      trabajo: {
        lugar: 'Puente Hurtado S.A.',
        telefono: '02781617228',
      },
      apellido: 'Rosas',
      nombre: 'Martín',
      fechaNacimiento: '1986-03-02T20:08:32.568Z',
      edad: 40,
      parentesco: 'Ti@',
      lugarNacimiento: 'Hidalgo del Parral',
      profesion: 'Adelante Creativo Facilitador',
      correo: 'yolanda_barrios1@example.com',
      estadoCivil: EstadoCivil.D,
      ingresoEconomico: 12062231,
      direccionHabitacion: 'Rampa David 5 Puerta 889',
      viveConNinho: true,
      telefonoResidencial: '04143446622',
      telefonoCelular: '04168607143',
      razonRepresenta: 'Incriminar Gemíparo Cendrada Abalaustrado Cenal.',
    },
    otrosDatos: {
      gustosNinho: {
        gustos: [],
        horas: 1,
      },
      retiraSoloInstitucion: {
        retira: false,
        razon: 'Incorrupto Engarzar Ceneque Engargolar Batanear.',
      },
      responsableRetiro: {
        nombre: 'Gloria Nieto',
        cedula: '37226731',
      },
      transporteEscuela: {
        medio: Medio.Privado,
        via: 'Incorregible Bastoncillo Abacero.',
      },
      gradoReprobado: {
        reprobado: true,
        grado: '5',
      },
      actividadesIndependientes: [],
      personaCuidaNinhoHogar: 'Herman@',
      cumpleNormasHogar: true,
      firmaActaCompromiso: true,
    },
    controlRetiro: {
      representante: {
        nombre: 'Sra. Audrey Rodrígez',
        cedula: '39264085',
      },
      retiro: true,
      fecha: '2023-02-09T01:40:16.226Z',
      motivo: 'Descepar Abaco Cenero Engarrotar Generalísimo.',
      institutoAEstudiar: 'Genealogista Gen Abadernar Descerebrado Engarzar.',
    },
    _id: '63f155bc0d39036aacf56b0f',
    controlInscripcion: [
      {
        docente: {
          nombre: 'Josefina',
          apellido: 'Córdova',
        },
        grado: '2',
        anhoEscolar: '2022-2023',
        fechaInscripcion: '2022-09-16T04:00:00.000Z',
      },
    ],
    actualizacionDatos: [
      {
        grado: '4',
        estatura: 1.61,
        peso: 67,
        calzado: 10,
        tallaCamisa: '10',
        tallaPantalon: 22,
      },
    ],
    createdAt: '2023-02-18T22:48:28.380Z',
    updatedAt: '2023-02-18T22:48:28.380Z',
  };
};
