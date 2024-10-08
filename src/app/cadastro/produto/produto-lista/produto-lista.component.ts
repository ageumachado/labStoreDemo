import { AsyncPipe, CurrencyPipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { Produto } from '../../../models/produto';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';

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
    NgClass,
    CurrencyPipe,
    FormsModule,
    TagModule,
    InputTextModule,
    InputSwitchModule,
  ],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.scss',
})
export default class ProdutoListaComponent {
  carregando = false;

  itemLista: Produto[] = [
    {
      id: '',
      nome: 'Produto 1',
      descricao: 'Produto 1 descrição',
      preco: 99.25,
      ativo: true,
    } as Produto,
  ] as Produto[];

  onPausarChange(item: Produto) {
    // this.produtoService
    //   .updatePausa(item.id!, item.ehPausado)
    //   .then(() => {
    //     alert('Pausa alterada com sucesso')
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  onAtivarChange(item: Produto) {
    // this.produtoService
    //   .updateAtivo(item.id!, item.ativo)
    //   .then(() => {
    //     alert('Pausa alterada com sucesso')
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }
}
