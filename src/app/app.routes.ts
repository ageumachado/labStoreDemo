import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'cadastro',
        loadChildren: () => import('./cadastro/cadastro.routing'),
      },
    ],
  },
];
