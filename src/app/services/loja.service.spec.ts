import { TestBed } from '@angular/core/testing';

import { LojaService } from './loja.service';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

describe('LojaService', () => {
  let service: LojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxIndexedDBModule.forRoot()],
      // providers: [NgxIndexedDBService],
    });
    service = TestBed.inject(LojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.clean()).toBeTruthy();
  });
});
