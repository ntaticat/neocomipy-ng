import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DifusionRoutingModule } from './difusion-routing.module';

import { DifusionPageComponent } from './pages/difusion-page/difusion-page.component';
import { InteresadosPageComponent } from './pages/interesados-page/interesados-page.component';
import { DifusionCursosPageComponent } from './pages/difusion-cursos-page/difusion-cursos-page.component';
import { DifusionCursoPageComponent } from './pages/difusion-curso-page/difusion-curso-page.component';
import { RegistrarInteresadoPageComponent } from './pages/registrar-interesado-page/registrar-interesado-page.component';
import { IdentificarInteresadoPageComponent } from './pages/identificar-interesado-page/identificar-interesado-page.component';
import { AppModule } from '../../app.module';

@NgModule({
  declarations: [
    DifusionPageComponent,
    InteresadosPageComponent,
    DifusionCursosPageComponent,
    DifusionCursoPageComponent,
    RegistrarInteresadoPageComponent,
    IdentificarInteresadoPageComponent,
  ],
  imports: [CommonModule, DifusionRoutingModule],
})
export class DifusionModule {}
