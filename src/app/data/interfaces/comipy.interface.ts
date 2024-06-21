// horario.model.ts
export interface IHorario {
  horario_id: number;
  dia_semana: string; // Ejemplo de campo
  hora_inicio: string; // Ejemplo de campo
  duracion: number; // Ejemplo de campo
  curso_id: number;
  turno: string;
}

// tema.model.ts
export interface ITema {
  tema_id: number;
  titulo: string; // Ejemplo de campo
  descripcion: string; // Ejemplo de campo
  curso_id: number;
}

export interface ICurso {
  curso_id: number;
  identificador: string;
  descripcion?: string;
  horarios: IHorario[];
  temas: ITema[];
}

export interface IHorarioPost {
  dia_semana: string; // Ejemplo de campo
  hora_inicio: string; // Ejemplo de campo
  duracion: number; // Ejemplo de campo
  curso_id: number;
  turno: string;
}

// tema.model.ts
export interface ITemaPost {
  titulo: string; // Ejemplo de campo
  descripcion: string; // Ejemplo de campo
}

export interface ICursoPost {
  identificador: string;
  descripcion?: string;
  horarios: IHorario[];
  temas: ITema[];
}

// TODO:
export interface IInteresadosHorarios {
  id: number;
  dia: string; // Ejemplo de campo, ajusta según tu modelo
  hora_inicio: string; // Ejemplo de campo, ajusta según tu modelo
  hora_fin: string; // Ejemplo de campo, ajusta según tu modelo
  interesado_id: number;
}

// TODO:
export interface IComentariosInteresados {
  id: number;
  comentario: string; // Ejemplo de campo, ajusta según tu modelo
  fecha: Date; // Ejemplo de campo, ajusta según tu modelo
  interesado_id: number;
}

export interface IInteresado {
  interesado_id: number;
  nombre_completo: string;
  nombres?: string;
  primer_apellido?: string;
  segundo_apellido?: string;
  mayor_edad: boolean;
  numero_contacto?: string;
  folio?: string;
  fecha_interes: Date;
  contactado: boolean;
  respuesta_recibida: boolean;
  respuesta_positiva: boolean;
  convertido_en_alumno: boolean;
  interesadosHorarios: IInteresadosHorarios[];
  comentariosInteresados: IComentariosInteresados[];
}

export interface IInteresadoPost {
  nombre_completo: string;
  nombres?: string;
  primer_apellido?: string;
  segundo_apellido?: string;
  mayor_edad: boolean;
  numero_contacto?: string;
  folio?: string;
  fecha_interes: Date;
  contactado: boolean;
  respuesta_recibida: boolean;
  respuesta_positiva: boolean;
  convertido_en_alumno: boolean;
}
