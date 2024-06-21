import { Component, OnInit } from '@angular/core';
import { ICurso } from '../../../data/interfaces/comipy.interface';
import { CursosService } from '../../../data/services/cursos.service';

@Component({
  selector: 'app-cursos-page',
  templateUrl: './cursos-page.component.html',
  styleUrl: './cursos-page.component.css',
})
export class CursosPageComponent implements OnInit {
  cursosData: ICurso[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursosData = cursos;
    });
  }
}
