export interface Plantilla {
  datosPersonales: DatosPersonales;
  aspectosSociales: AspectosSociales;
  identificacionPadres: IdentificacionPadres;
  aspectosSalud: AspectosSalud;
  representanteLegal: RepresentanteLegal;
  otrosDatos: OtrosDatos;
  controlInscripcion: ControlInscripcion[];
  actualizacionDatos: ActualizacionDatos[];
  controlRetiro: ControlRetiro;
}

export interface ControlRetiro {
  retiro: boolean; // Boolean
  fecha: string; // Date
  motivo: string; // String
  institutoAEstudiar: string; // String
  //Objeto
  representante: {
    nombre: string; // String
    apellido: string; // String
  };
}

export interface ActualizacionDatos {
  grado: string; // String, valores permitidos: ["1", "2", "3", "4", "5", "6"]
  estatura: number; // Number, valor mínimo: 0.5 y máximo: 2 *Medida en metros*
  peso: number; // Number, valor mínimo: 10 y máximo: 80 *Medida en kilogramo*
  calzado: number; // Number, valor mínimo:10 y máximo: 45
  tallaCamisa: string; // String
  tallaPantalon: number; // Number, valor mínimo: 4 y máximo: 30
}

export interface ControlInscripcion {
  grado: string; // String, valores permitidos: ["1", "2", "3", "4", "5", "6"]
  anhoEscolar: string; // String
  fechaInscripcion: string; // Date
  //Objeto
  docente: {
    nombre: string; // String
    apellido: string; // String
  };
}

export interface OtrosDatos {
  actividadesIndependientes: string[]; //Array de String
  personaCuidaNinhoHogar: string; // String
  gustosNinho: GustosNinho;
  retiraSoloInstitucion: RetiraSoloInstitucion;
  responsableRetiro: ResponsableRetiro;
  transporteEscuela: TransporteEscuela;
  gradoReprobado: GradoReprobado;
  cumpleNormasHogar: boolean; // Boolean
  firmaActaCompromiso: boolean; // Boolean
}

export interface GradoReprobado {
  reprobado: boolean; // Boolean
  grado: string; // String
}

export interface TransporteEscuela {
  medio: string; // String, valores permitidos: ["Privado", "Publico", "Transporte Escolar", "Caminando"]
  via: string; // String
}

export interface ResponsableRetiro {
  nombre: string; // String
  cedula: string; // String
}

export interface RetiraSoloInstitucion {
  retira: boolean; // Boolean
  razon: string; // String
}

export interface GustosNinho {
  gustos: string[]; // Array de String
  horas: number; // Number
}

export interface RepresentanteLegal {
  apellido: string; // String
  nombre: string; // String
  cedula: Cedula;
  fechaNacimiento: string; // Date
  edad: number; // Number
  parentesco: string; // String
  lugarNacimiento: string; // String
  profesion: string; // String
  correo: string; // String
  estadoCivil: string; // String
  ingresoEconomico: number; // Number
  direccionHabitacion: string; // String
  viveConNinho: boolean; // Boolean
  telefonoResidencial: string; // String
  telefonoCelular: string; // String
  trabajo: {
    lugar: string; // String
    telefono: string; // String
  };
  razonRepresenta: string; // String
}

export interface AspectosSalud {
  enfermedadesEmbarazo: string[]; // Array de String
  antecedentesPerinatales: string[]; // Array de String
  antecedentesPostNatales: string; // String
  problemasNacimiento: string; // String
  pesoNacimiento: number; // Number, *Medida en kilogramo*
  tallaNacimiento: number; // Number
  lloroNacer: boolean; // Boolean
  gatear: Gatear;
  edadCaminar: number; // Number
  familiarDiscapacidad: FamiliarDiscapacidad;
  enfermedadesNinho: string[]; //Array de String
  vacunasRecibidas: string[]; // Array de string
  habitosAlimenticios: HabitosAlimenticios;
}

export interface HabitosAlimenticios {
  alimentos: Alimentos;
  alergia: Alergia;
  condicionEspecial: CondicionEspecial;
  objetosRecetados: ObjetosRecetados;
  tratamiento: Tratamiento;
  asegurado: Asegurado;
  desarrolloLenguajeMotor: DesarrolloLenguajeMotor;
  necesidadesCompromiso: string[]; // Array de String
}

export interface DesarrolloLenguajeMotor {
  edadHablo: number; // Number
  duermeBien: string; // String
  alteraFacil: boolean; // Boolean
  manoTrabajar: string; // String
}

export interface Asegurado {
  seguro: boolean; // Boolean
  tipo: string[]; // Array de String
}

export interface Tratamiento {
  recibe: boolean; // Boolean
  nombre: string; // String
  motivo: string; // String
  medico: string; // String
  especialidad: string; // String
  fechaInicio: string; // Date
}

export interface ObjetosRecetados {
  zapatosOrtopedicos: boolean; // Boolean
  lentesRecetados: boolean; // Boolean
  otros: string[]; // Array de String
}

export interface CondicionEspecial {
  posee: boolean; // Boolean
  descripcion: string; // String
}

export interface Alergia {
  posee: boolean; // Boolean
  descripcion: string; // String
  alimentos: string[]; // Array de String
}

export interface Alimentos {
  comeTodo: boolean;
  tipo: string; //String
}

export interface FamiliarDiscapacidad {
  posee: boolean; // Boolean
  descripcion: string; // String
}

export interface Gatear {
  gateo: boolean; // Boolean
  edad: number; // Number, valores *Medida en meses*
}

export interface IdentificacionPadres {
  madre: Madre;
  padre: Padre;
}

export interface Padre {
  apellido: string; // String
  nombre: string; // String
  cedula: Cedula;
  fechaNacimiento: string; // Date
  estadoCivil: string; // String
  lugarNacimiento: string; // String
  profesion: string; // String
  ingresoEconomico: number; // Number
  telefonoResidencial: string; // String
  telefonoCelular: string; // String
  trabajo: {
    lugar: string; // String
    telefono: string; // String
  };
  enfermedadesPadecidas: string[]; //Array de String
  coreo: string; // String
  viveConNinho: boolean; // Boolean
  gradoInstruccion: string; // String
  relacionNinho: string; // String
}

export interface Madre {
  apellido: string; //String
  nombre: string; // String
  cedula: Cedula;
  fechaNacimiento: string; // Date
  estadoCivil: string; // String
  lugarNacimiento: string; // String
  profesion: string; // String
  ingresoEconomico: number; //Number
  telefonoResidencial: string; // String
  telefonoCelular: string; // String
  trabajo: {
    lugar: string; // String
    telefono: string; // String
  };
  direccionHabitacion: string; // String
  enfermedadesPadecidas: string[]; //Array de String
  viveConNinho: boolean; //Boolean
  gradoInstruccion: string; // String
  vivienda: Vivienda;
  religion: string; // String
  actividades: string[]; // Array de String
  misionSocial: MisionSocial;
  correo: string; // String
  relacionNinho: string; // String
}

export interface MisionSocial {
  posee: boolean; // Boolean
  descripcion: string; // String
}

export interface Vivienda {
  tenencia: string; // String, valores permitidos: ["Propia","Alquilada","Opcion a Compra","Compartida","Invadida"]
  tipo: string; // String, valores permitidos:  ["Rancho","Casa","Quinta","Apartamento]
}

export interface AspectosSociales {
  viveNinho: ViveNinho;
  totalPersonasHogar: number; // Number, valor mínimo: 0
  hermanos: Hermanos;
  otrosFamiliaresHogar: OtrosFamiliaresHogar;
  personaPostClases: string; // String
  acompanhanteTareas: string; // String
  deportesPractica: string[]; // Array de String
  horarioPractica: string; // String
  talentoActitud: string[]; //Array de String
  beca: boolean; // Boolean
  lecturaHogar: LecturaHogar;
  trabajo: Trabajo;
}

export interface Trabajo {
  ejerce: boolean; // Boolean
  funciones: string; // String
}

export interface LecturaHogar {
  practica: boolean; // Boolean
  tipo: string; // String
}

export interface OtrosFamiliaresHogar {
  viven: boolean; // Boolean
  parentesco: string[]; // Array de String
  descripcionRelacion: string; // String
}

export interface Hermanos {
  cantidad: number; // Number, valor mínimoÑ 0
  lugarOcupaNinho: string; // string
  descripcionRelacion: string; // String
}

export interface ViveNinho {
  madre: boolean; // Boolean
  padre: boolean; // Boolean
  otros: string; // String
}

export interface DatosPersonales {
  nombre: string;
  apellido: string;
  cedula: Cedula;
  grupoSanguineo: string;
  sexo: string; //String, valores permitidos: ["Masculino","Femenino"]
  fechaNacimiento: string;
  lugarNacimiento: string;
  parroquia: string;
  municipio: string;
  pais: string;
  estadoNacimiento: string;
  telefonoResidencial: string;
  canaima: Canaima;
  correo: string; // String
  nuevoIngreso: boolean;
  institucionProcedencia: string;
  razonInscripcion: string;
  gradoCursar: string; // String, valores permitidos: ["1", "2", "3", "4", "5", "6"]
  repitiente: boolean;
  regular: boolean;
  tallaCamisa: string;
  estatura: number; // Number, valor mínimo: 0.5 y máximo: 2 *Medida en metros*
  peso: number; //Number, valor mínimo: 10 y máximo: 80 *Medida en kilogramo*
  tallaPantalon: number; // Number, valor mínimo: 4 y máximo: 30
  calzado: number; // Number, valor mínimo:10 y máximo: 45
  hermanosInstitucion: hermanosInstitucion;
  personaEmergencia: personaEmergencia;
}

export interface Cedula {
  tipo: string; //String, solo "V" o "E"
  numero: string;
}

export interface Canaima {
  posee: boolean;
  serial: string;
}

export interface hermanosInstitucion {
  posee: boolean; // Boolean
  cantidad: number; //Number, valor mínimo: 0 y máximo: 10
  gradoCursan: string[]; // Array de String, valores permitidos: ["1", "2", "3", "4", "5", "6"]
}

export interface personaEmergencia {
  nombre: string; //String
  parentesco: string; //String
  telefonoResidencial: string; //String numerico, longitud numérica minima de 11
  telefonoCelular: string; //String numerico, longitud numérica minima de 11
}
