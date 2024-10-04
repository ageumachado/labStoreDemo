import { Routes } from '@angular/router';
import { LojaComponent } from './pages/loja/loja.component';
import { AppLayoutComponent } from './layout/app.layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'loja',
        component: LojaComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../app/pages/loja/loja-lista/loja-lista.component'),
          },
          {
            path: 'criar',
            loadComponent: () =>
              import('../app/pages/loja/loja-form/loja-form.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('../app/pages/loja/loja-form/loja-form.component'),
          },
        ],
      },
    ],
  },
];
