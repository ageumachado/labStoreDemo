import { Route } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { LojaComponent } from './loja/loja.component';
import { ProdutoComponent } from './produto/produto.component';

export default [
  {
    path: '',
    component: CadastroComponent,
    children: [
      {
        path: 'loja',
        title: 'Loja',
        component: LojaComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./loja/loja-lista/loja-lista.component'),
          },
          {
            path: 'criar',
            loadComponent: () => import('./loja/loja-form/loja-form.component'),
          },
          {
            path: ':id',
            loadComponent: () => import('./loja/loja-form/loja-form.component'),
          },
        ],
      },
      {
        path: 'produto',
        title: 'Produto',
        component: ProdutoComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./produto/produto-lista/produto-lista.component'),
          },
          {
            path: 'criar',
            loadComponent: () =>
              import('./produto/produto-form/produto-form.component'),
          },
          {
            path: ':id',
            loadComponent: () =>
              import('./produto/produto-form/produto-form.component'),
          },
        ],
      },
    ],
  },
] as Route[];
