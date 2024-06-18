import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosPageComponent } from './cursos-page/cursos-page.component';
import { CursoPageComponent } from './curso-page/curso-page.component';


@NgModule({
  declarations: [
    CursosPageComponent,
    CursoPageComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
