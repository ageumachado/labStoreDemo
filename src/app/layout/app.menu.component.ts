import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { NgFor, NgIf } from '@angular/common';
import { AppMenuitemComponent } from './app.menuitem.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor, NgIf, AppMenuitemComponent],
  templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'Cadastro',
        items: [
          {
            label: 'Loja',
            icon: 'pi pi-fw pi-id-card',
            routerLink: ['/loja'],
          },
          {
            label: 'Produto',
            icon: 'pi pi-fw pi-database',
            routerLink: ['/produto'],
          },
          // {
          //   label: 'Input',
          //   icon: 'pi pi-fw pi-check-square',
          //   routerLink: ['/uikit/input'],
          // },
          // {
          //   label: 'Float Label',
          //   icon: 'pi pi-fw pi-bookmark',
          //   routerLink: ['/uikit/floatlabel'],
          // },
          // {
          //   label: 'Invalid State',
          //   icon: 'pi pi-fw pi-exclamation-circle',
          //   routerLink: ['/uikit/invalidstate'],
          // },
          // {
          //   label: 'Button',
          //   icon: 'pi pi-fw pi-box',
          //   routerLink: ['/uikit/button'],
          // },
          // {
          //   label: 'Table',
          //   icon: 'pi pi-fw pi-table',
          //   routerLink: ['/uikit/table'],
          // },
          // {
          //   label: 'List',
          //   icon: 'pi pi-fw pi-list',
          //   routerLink: ['/uikit/list'],
          // },
          // {
          //   label: 'Tree',
          //   icon: 'pi pi-fw pi-share-alt',
          //   routerLink: ['/uikit/tree'],
          // },
          // {
          //   label: 'Panel',
          //   icon: 'pi pi-fw pi-tablet',
          //   routerLink: ['/uikit/panel'],
          // },
          // {
          //   label: 'Overlay',
          //   icon: 'pi pi-fw pi-clone',
          //   routerLink: ['/uikit/overlay'],
          // },
          // {
          //   label: 'Media',
          //   icon: 'pi pi-fw pi-image',
          //   routerLink: ['/uikit/media'],
          // },
          // {
          //   label: 'Menu',
          //   icon: 'pi pi-fw pi-bars',
          //   routerLink: ['/uikit/menu'],
          //   routerLinkActiveOptions: {
          //     paths: 'subset',
          //     queryParams: 'ignored',
          //     matrixParams: 'ignored',
          //     fragment: 'ignored',
          //   },
          // },
        ],
      },
    ];
  }
}
