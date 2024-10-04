import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { Produto } from '../../../models/produto';
import { of } from 'rxjs';

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [
    RouterLink,
    TableModule,
    AsyncPipe,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    TooltipModule,
  ],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.scss',
})
export default class ProdutoListaComponent {
  loading = false;
  lojas$ = of<Produto[]>([
    {
      id: '',
      nome: 'Produto 1',
      descricao: 'Produto 1 descrição',
      esgotado: false,
      pausado: false,
      ativo: true,
    },
  ] as Produto[]);
}
