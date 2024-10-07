import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { of } from 'rxjs';
import { Loja } from '../../../models/loja';
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MenuItem } from 'primeng/api';
import { LojaService } from '../../../services/loja.service';

@Component({
  selector: 'app-loja-lista',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    TableModule,
    AsyncPipe,
    SplitButtonModule,
    FormsModule,
    NgOptimizedImage,
    // ToastModule,
    DataViewModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    ToolbarModule,
    TooltipModule,
    InputSwitchModule,
    DialogModule,
  ],
  templateUrl: './loja-lista.component.html',
  styleUrl: './loja-lista.component.scss',
})
export default class LojaListaComponent {
  private readonly router = inject(Router);

  carregando = false;
  layout: 'list' | 'grid' = 'list';
  itemLista: Loja[] = [
    {
      id: '',
      nome: 'Loja DB1',
      urlEndpoint: 'db1',
      descricao: 'Empresa Base',

      ativo: true,
    } as Loja,
    {
      id: '',
      nome: 'Loja SENAC DN',
      urlEndpoint: 'senacdn',
      descricao: 'Empresa SENAC DN',
      aberta: true,
      ativo: true,
    } as Loja,
  ];
  visibleDialog = false;
  inputLinkUrl = '';

  itemsMenu: MenuItem[] = [
    {
      label: 'Editar',
      tooltip: 'Editar cesta',
      icon: 'pi pi-fw pi-pencil',
      command: this.editar.bind(this),
    },
    {
      label: 'Gerenciar entrega',
      tooltip: 'Gerenciar entrega da loja',
      icon: 'pi pi-fw pi-truck',
      command: this.gerenciarEntrega.bind(this),
    },
    {
      label: 'Gerenciar forma de pagamento',
      tooltip: 'Gerenciar pagamentos da loja',
      icon: 'pi pi-fw pi-money-bill',
      command: this.gerenciarPagamento.bind(this),
    },
    {
      label: 'Gerenciar logomarca',
      tooltip: 'Gerenciar logomarca da loja',
      icon: 'pi pi-fw pi-upload',
      command: this.gerenciarLogomarca.bind(this),
    },
    {
      label: 'Gerar link',
      tooltip: 'Gerar link para seleção',
      icon: 'pi pi-fw pi-link',
      command: this.gerarLink.bind(this),
    },
  ];

  itemSel?: Loja;

  onAtivarChange(item: Loja) {
    // this.lojaService
    //   .updateAtivo(item.id!, item.status)
    //   .then(() => {
    //     this.messageService.add(
    //       this.showMensagemInfo('Status alterado com sucesso'),
    //     );
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  }

  openMenu(item: Loja) {
    this.itemSel = item;
  }

  editar() {
    if (!this.itemSel) {
      // this.messageService.add(this.showMensagemError('Selecione um item'));
      return;
    }
    this.router.navigate(['adm', 'cadastro', 'loja', this.itemSel?.id]);
  }

  gerenciarEntrega() {
    if (!this.itemSel) {
      // this.messageService.add(this.showMensagemError('Selecione um item'));
      return;
    }
    this.router.navigate([
      'adm',
      'cadastro',
      'loja',
      this.itemSel?.id,
      'entrega',
    ]);
  }

  gerarLink() {
    // this.visibleDialog = true;
    // this.inputLinkUrl = `${environment.urlBase}/${this.itemSel?.endpoint}`;
  }

  gerenciarPagamento() {
    if (!this.itemSel) {
      // this.messageService.add(this.showMensagemError('Selecione um item'));
      return;
    }
    this.router.navigate([
      'adm',
      'cadastro',
      'loja',
      this.itemSel?.id,
      'pagamento',
    ]);
  }

  gerenciarLogomarca() {
    if (!this.itemSel) {
      // this.messageService.add(this.showMensagemError('Selecione um item'));
      return;
    }
    this.router.navigate([
      'adm',
      'cadastro',
      'loja',
      this.itemSel?.id,
      'logomarca',
    ]);
  }
}
