import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegistrarCursoPageComponent } from './registrar-curso-page/registrar-curso-page.component';
import { RegistrarHorarioPageComponent } from './registrar-horario-page/registrar-horario-page.component';
import { RegistrarDocentePageComponent } from './registrar-docente-page/registrar-docente-page.component';
import { RegistrarTemaPageComponent } from './registrar-tema-page/registrar-tema-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';


@NgModule({
  declarations: [
    RegistrarCursoPageComponent,
    RegistrarHorarioPageComponent,
    RegistrarDocentePageComponent,
    RegistrarTemaPageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
