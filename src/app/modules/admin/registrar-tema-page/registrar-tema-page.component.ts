import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../../../data/services/cursos.service';
import { TemasService } from '../../../data/services/temas.service';
import { ICurso, ITemaPost } from '../../../data/interfaces/comipy.interface';

@Component({
  selector: 'app-registrar-tema-page',
  templateUrl: './registrar-tema-page.component.html',
  styleUrl: './registrar-tema-page.component.css',
})
export class RegistrarTemaPageComponent implements OnInit {
  temaForm: FormGroup;

  cursosData: ICurso[] = [];

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private temasService: TemasService
  ) {
    this.temaForm = this.fb.group({
      curso_id: ['', Validators.required],
      titulo: ['', [Validators.required, Validators.maxLength(200)]],
      descripcion: [''],
    });
  }

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursosData = cursos;
    });
  }

  onSubmit() {
    if (this.temaForm.invalid) {
      console.log('Formulario inválido');
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servicio.
    }

    console.log('Formulario válido', this.temaForm.value);

    const data: ITemaPost = {
      ...this.temaForm.value,
      curso: this.temaForm.get('curso_id')?.value,
    };

    this.temasService.postTema(data).subscribe();
  }
}
