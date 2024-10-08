import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Loja } from '../models/loja';
import { EMPTY, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LojaService {
  private _storeName: string = 'loja';
  constructor(private dbService: NgxIndexedDBService) {}

  addOrUpdate(entidade: Loja) {
    return this.dbService.update(this._storeName, entidade);
  }

  exists(id: string) {
    return this.dbService
      .count(this._storeName, id)
      .pipe(map((result) => result > 0));
  }

  getAll() {
    return this.dbService.getAll<Loja | null>(this._storeName);
  }

  getByKey(id?: string) {
    if (!id) return EMPTY;
    return this.dbService.getByKey<Loja | null>(this._storeName, id);
  }

  delete(id?: string) {
    if (!id) return EMPTY;
    return this.dbService.delete(this._storeName, id);
  }

  clean() {
    return this.dbService.clear(this._storeName);
  }
}
