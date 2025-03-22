import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../../../data/services/cursos.service';
import { InteresadosService } from '../../../../data/services/interesados.service';
import {
  ICurso,
  IInteresado,
} from '../../../../data/interfaces/comipy.interface';

@Component({
  selector: 'app-difusion-cursos-page',
  templateUrl: './difusion-cursos-page.component.html',
  styleUrl: './difusion-cursos-page.component.css',
})
export class DifusionCursosPageComponent implements OnInit {
  interesadoId: number = 0;
  interesado: IInteresado = {
    interesado_id: 0,
    nombre_completo: '',
    mayor_edad: false,
    fecha_interes: new Date(),
    contactado: false,
    respuesta_recibida: false,
    respuesta_positiva: false,
    convertido_en_alumno: false,
    interesadosHorarios: [],
    comentariosInteresados: [],
  };

  cursosData: ICurso[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.interesadoId = Number(params.get('id')) ?? 0;
      console.log('Curso ID:', this.interesadoId);

      const interesadoId = Number(localStorage.getItem('#3312') ?? '0');

      if (this.interesadoId !== interesadoId) {
        localStorage.removeItem('#3312');
        this.router.navigateByUrl('/difusion');
      }

      this.interesadosService
        .getInteresado(this.interesadoId)
        .subscribe((interesado) => {
          this.interesado = interesado;
          console.log('Interesado:', this.interesado);
        });
    });

    this.cursosService.getCursos().subscribe((cursos) => {
      this.cursosData = cursos;
    });
  }

  constructor(
    private cursosService: CursosService,
    private interesadosService: InteresadosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
