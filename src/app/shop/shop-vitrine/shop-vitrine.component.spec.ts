import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopVitrineComponent } from './shop-vitrine.component';
import { RouterModule } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { of } from 'rxjs';
import { Loja } from '../../models/loja';

describe('ShopVitrineComponent', () => {
  let component: ShopVitrineComponent;
  let fixture: ComponentFixture<ShopVitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopVitrineComponent, RouterModule.forRoot([]), LetDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopVitrineComponent);
    component = fixture.componentInstance;
    component.loja$ = of<Loja>({
      id: 1,
      aberta: true,
      ativo: true,
      descricao: 'descricao',
      endpoint: 'loja',
      nome: 'nome',
      observacao: '',
      portalPedidoAberto: true,
      sequencialPedido: 0,
    } as Loja);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
