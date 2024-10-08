import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProdutoComponent } from './shop-produto.component';

describe('ShopProdutoComponent', () => {
  let component: ShopProdutoComponent;
  let fixture: ComponentFixture<ShopProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopProdutoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
