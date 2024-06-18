import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosPageComponent } from './cursos-page/cursos-page.component';
import { CursoPageComponent } from './curso-page/curso-page.component';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: CursosPageComponent,
      },
      {
        path: ':id',
        component: CursoPageComponent,
      },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
