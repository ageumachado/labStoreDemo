import { Component, inject } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './app.footer.component.html',
})
export class AppFooterComponent {
  public readonly layoutService = inject(LayoutService);
}
