import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-loja',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class LojaComponent {}
