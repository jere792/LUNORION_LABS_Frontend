import { Component } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { TopNavbar } from './shared/components/top-navbar/top-navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, TopNavbar],
  template: `
  <div class="layout">

    <app-sidebar [items]="menu"></app-sidebar>

    <div class="main-content">
      <app-top-navbar
        [pageTitle]="'Dashboard'"
      ></app-top-navbar>
    </div>

  </div>
  `,
  styles: [`
    .layout {
      display: flex;
      min-height: 100vh;
    }

    .main-content {
      flex: 1;
    }
  `]
})

export class App {
  menu = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      route: '/dashboard',
    },
    {
      label: 'Clientes',
      icon: 'pi pi-users',
      route: '/customers',
    },
    {
      label: 'Ventas',
      icon: 'pi pi-shopping-cart',
      route: '/sales'
    },
    {
      label: 'Vehículos',
      icon: 'pi pi-car',
      route: '/vehicles',
    },
  ];
}