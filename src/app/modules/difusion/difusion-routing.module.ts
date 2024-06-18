import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifusionPageComponent } from './pages/difusion-page/difusion-page.component';
import { InteresadosPageComponent } from './pages/interesados-page/interesados-page.component';
import { DifusionCursosPageComponent } from './pages/difusion-cursos-page/difusion-cursos-page.component';
import { DifusionCursoPageComponent } from './pages/difusion-curso-page/difusion-curso-page.component';
import { RegistrarInteresadoPageComponent } from './pages/registrar-interesado-page/registrar-interesado-page.component';
import { IdentificarInteresadoPageComponent } from './pages/identificar-interesado-page/identificar-interesado-page.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DifusionPageComponent,
      },
      {
        path: 'interesados',
        component: InteresadosPageComponent,
      },
      {
        path: 'identificar',
        component: IdentificarInteresadoPageComponent,
      },
      {
        path: ':id/cursos',
        component: DifusionCursosPageComponent,
      },
      {
        path: ':id/curso',
        component: DifusionCursoPageComponent,
      },
      {
        path: ':id/registrar',
        component: RegistrarInteresadoPageComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DifusionRoutingModule {}
