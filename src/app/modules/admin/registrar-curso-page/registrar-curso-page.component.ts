import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICursoPost } from '../../../data/interfaces/comipy.interface';
import { CursosService } from '../../../data/services/cursos.service';

@Component({
  selector: 'app-registrar-curso-page',
  templateUrl: './registrar-curso-page.component.html',
  styleUrl: './registrar-curso-page.component.css',
})
export class RegistrarCursoPageComponent {
  cursoForm: FormGroup = this.fb.group({
    identificador: ['', [Validators.required, Validators.maxLength(100)]],
    descripcion: [''],
  });

  constructor(private fb: FormBuilder, private cursosService: CursosService) {}

  onSubmit() {
    if (this.cursoForm.invalid) {
      console.log('Formulario inválido');
    }
    console.log('Formulario válido', this.cursoForm.value);

    const data: ICursoPost = {
      ...this.cursoForm.value,
    };

    this.cursosService.postCurso(data).subscribe();
  }
}
