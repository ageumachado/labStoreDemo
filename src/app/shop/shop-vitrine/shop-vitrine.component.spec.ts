import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopVitrineComponent } from './shop-vitrine.component';

describe('ShopVitrineComponent', () => {
  let component: ShopVitrineComponent;
  let fixture: ComponentFixture<ShopVitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopVitrineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
