import { ComponentFixture, TestBed } from '@angular/core/testing';
import LojaFormComponent from './loja-form.component';
import { LojaService } from '../../../services/loja.service';
import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { LojaFormComponent } from './loja-form.component';

describe('LojaFormComponent', () => {
  let component: LojaFormComponent;
  let fixture: ComponentFixture<LojaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LojaFormComponent,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
        NgxIndexedDBModule.forRoot(),
      ],
      providers: [LojaService, NgxIndexedDBService],
    }).compileComponents();

    fixture = TestBed.createComponent(LojaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
