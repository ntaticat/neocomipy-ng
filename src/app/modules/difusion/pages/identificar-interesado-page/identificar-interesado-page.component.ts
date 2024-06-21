import { Component, OnInit } from '@angular/core';
import { InteresadosService } from '../../../../data/services/interesados.service';
import { IInteresadoPost } from '../../../../data/interfaces/comipy.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificar-interesado-page',
  templateUrl: './identificar-interesado-page.component.html',
  styleUrl: './identificar-interesado-page.component.css',
})
export class IdentificarInteresadoPageComponent implements OnInit {
  isLoading = true;

  constructor(
    private interesadosService: InteresadosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const nuevo_interesado: IInteresadoPost = {
      nombre_completo: '',
      mayor_edad: false,
      fecha_interes: new Date(),
      contactado: false,
      respuesta_recibida: false,
      respuesta_positiva: false,
      convertido_en_alumno: false,
    };

    this.interesadosService
      .postInteresado(nuevo_interesado)
      .subscribe((interesado) => {
        this.isLoading = false;
        localStorage.setItem('#3312', interesado.interesado_id.toString());
        this.router.navigate([
          '/',
          'difusion',
          interesado.interesado_id,
          'cursos',
        ]);
      });
  }
}
