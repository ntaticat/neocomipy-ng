import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CursosService } from '../../../data/services/cursos.service';
import { TemasService } from '../../../data/services/temas.service';
import { ICurso } from '../../../data/interfaces/comipy.interface';

@Component({
  selector: 'app-registrar-tema-page',
  templateUrl: './registrar-tema-page.component.html',
  styleUrl: './registrar-tema-page.component.css',
})
export class RegistrarTemaPageComponent implements OnInit {
  cursosData: ICurso[] = [];

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private temasService: TemasService
  ) {}

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursosData = cursos;
    });
  }
}
