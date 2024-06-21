import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../../data/services/cursos.service';
import {
  ICurso,
  IHorarioPost,
} from '../../../data/interfaces/comipy.interface';
import { HorariosService } from '../../../data/services/horarios.service';

@Component({
  selector: 'app-registrar-horario-page',
  templateUrl: './registrar-horario-page.component.html',
  styleUrl: './registrar-horario-page.component.css',
})
export class RegistrarHorarioPageComponent implements OnInit {
  horarioForm: FormGroup;
  cursosData: ICurso[] = [];
  diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private horariosService: HorariosService
  ) {
    this.horarioForm = this.fb.group({
      curso_id: ['', Validators.required],
      dia_semana: ['', [Validators.required, Validators.maxLength(20)]],
      hora_inicio: ['', Validators.required],
      duracion: [0, [Validators.required, Validators.min(0)]],
      turno: ['', [Validators.required, Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursosData = cursos;
    });
  }

  onSubmit() {
    if (this.horarioForm.invalid) {
      console.log('Formulario inválido');
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servicio.
    }

    console.log('Formulario válido', this.horarioForm.value);

    const data: IHorarioPost = {
      ...this.horarioForm.value,
      curso: this.horarioForm.get('curso_id')?.value,
    };

    this.horariosService.postHorario(data).subscribe();
  }
}
