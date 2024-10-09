import { ComponentFixture, TestBed } from '@angular/core/testing';
import LojaListaComponent from './loja-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

describe('LojaListaComponent', () => {
  let component: LojaListaComponent;
  let fixture: ComponentFixture<LojaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LojaListaComponent,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        NgxIndexedDBModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LojaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
