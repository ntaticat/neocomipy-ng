import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RegistrarCursoPageComponent } from './registrar-curso-page/registrar-curso-page.component';
import { RegistrarDocentePageComponent } from './registrar-docente-page/registrar-docente-page.component';
import { RegistrarHorarioPageComponent } from './registrar-horario-page/registrar-horario-page.component';
import { RegistrarTemaPageComponent } from './registrar-tema-page/registrar-tema-page.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: AdminPageComponent,
      },
      {
        path: 'registrar-curso',
        component: RegistrarCursoPageComponent,
      },
      {
        path: 'registrar-horario',
        component: RegistrarHorarioPageComponent,
      },
      {
        path: 'registrar-tema',
        component: RegistrarTemaPageComponent,
      },
      {
        path: 'registrar-docente',
        component: RegistrarDocentePageComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
