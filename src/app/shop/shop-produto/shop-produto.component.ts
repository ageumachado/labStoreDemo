import { NgClass, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { SelectItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-shop-produto',
  standalone: true,
  imports: [
    NgClass,
    CurrencyPipe,
    FormsModule,
    DataViewModule,
    RatingModule,
    TagModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    AnimateOnScrollModule,
  ],
  templateUrl: './shop-produto.component.html',
  styleUrl: './shop-produto.component.scss',
})
export class ShopProdutoComponent implements OnInit {
  protected produtos!: Produto[];

  @Input({ required: true }) set value(prods: Produto[]) {
    this.produtos = [...prods];
  }

  @Input() carregando = false;

  sortOptions!: SelectItem[];
  sortOrder = -1;
  sortField = 'nome';

  @Output() onAdd = new EventEmitter<Produto>();

  // @ViewChild('dv', { static: true }) dataView!: DataView;

  ngOnInit() {
    this.sortOptions = [
      { label: 'Nome Crescente', value: 'nome' },
      { label: 'Nome Decrescente', value: '!nome' },
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
