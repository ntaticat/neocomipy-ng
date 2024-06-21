import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../data/services/cursos.service';
import { ICurso } from '../../../data/interfaces/comipy.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-page',
  templateUrl: './curso-page.component.html',
  styleUrl: './curso-page.component.css',
})
export class CursoPageComponent implements OnInit {
  cursoId: number = 0;
  cursoData: ICurso = {
    curso_id: 0,
    identificador: '',
    horarios: [],
    temas: [],
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cursoId = Number(params.get('id')) ?? 0;
      console.log('Curso ID:', this.cursoId);

      this.cursosService.getCurso(this.cursoId).subscribe((curso) => {
        this.cursoData = curso;
        console.log('Curso:', this.cursoData);
      });
    });
  }

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute
  ) {}
}
