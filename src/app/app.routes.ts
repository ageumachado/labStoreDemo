import { Routes } from '@angular/router';
import { LojaComponent } from './pages/loja/loja.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ProdutoComponent } from './pages/produto/produto.component';

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
      {
        path: 'produto',
        component: ProdutoComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                '../app/pages/produto/produto-lista/produto-lista.component'
              ),
          },
          {
            path: 'criar',
            loadComponent: () =>
              import(
                '../app/pages/produto/produto-form/produto-form.component'
              ),
          },
          {
            path: ':id',
            loadComponent: () =>
              import(
                '../app/pages/produto/produto-form/produto-form.component'
              ),
          },
        ],
      },
    ],
  },
];
