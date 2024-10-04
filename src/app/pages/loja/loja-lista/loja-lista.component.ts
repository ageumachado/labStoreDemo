import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { of } from 'rxjs';
import { Loja } from '../../../models/loja';
import { AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-loja-lista',
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
  templateUrl: './loja-lista.component.html',
  styleUrl: './loja-lista.component.scss',
})
export default class LojaListaComponent {
  loading = false;
  lojas$ = of<Loja[]>([
    {
      id: '',
      urlEndpoint: 'db1',
      descricao: 'Empresa Base',

      ativo: true,
    },
  ]);
}
