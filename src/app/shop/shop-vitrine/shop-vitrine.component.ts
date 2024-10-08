import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ShopProdutoComponent } from '../shop-produto/shop-produto.component';
import { BlockUIModule } from 'primeng/blockui';
import { LetDirective } from '@ngrx/component';
import { of } from 'rxjs';
import { Loja } from '../../models/loja';
import { Produto } from '../../models/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-vitrine',
  standalone: true,
  imports: [
    // JsonPipe,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BlockUIModule,
    CardModule,
    LetDirective,
    // ShopLojaComponent,
    ShopProdutoComponent,
    // ShopCarrinhoComponent,
    // ShopCarrinhoAddComponent,
    // ShopNotfoundComponent,
  ],
  templateUrl: './shop-vitrine.component.html',
  styleUrl: './shop-vitrine.component.scss',
})
export class ShopVitrineComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  loja$ = of<Loja>();
  produtos$ = of<Produto[]>([]);
  carregando$ = of(false);

  display = false;
  private slug = '';

  onAddProduto(produto: Produto) {
    this.display = true;
  }

  onFinalizarCarrinho() {
    this.router.navigate(['/', this.slug, 'pedido', 'entrega']);
  }
}
