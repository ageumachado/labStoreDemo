import { Routes } from '@angular/router';
import { LojaComponent } from './cadastro/loja/loja.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ProdutoComponent } from './cadastro/produto/produto.component';

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
              import('./cadastro/loja/loja-lista/loja-lista.component'),
          },
          {
            path: 'criar',
            loadComponent: () =>
              import('./cadastro/loja/loja-form/loja-form.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./cadastro/loja/loja-form/loja-form.component'),
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
                './cadastro/produto/produto-lista/produto-lista.component'
              ),
          },
          {
            path: 'criar',
            loadComponent: () =>
              import('./cadastro/produto/produto-form/produto-form.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./cadastro/produto/produto-form/produto-form.component'),
          },
        ],
      },
    ],
  },
];
