import { Component } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { TopNavbar } from './shared/components/top-navbar/top-navbar';
import { Breadcrumb } from './shared/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, TopNavbar, Breadcrumb],
  template: `
  <div class="layout">

    <app-sidebar [items]="menu"></app-sidebar>

    <div class="main-content">
      <app-top-navbar
        [pageTitle]="'Dashboard'">
      </app-top-navbar>
      <app-breadcrumb
        [items]="['Inicio', 'Dashboard']">
      </app-breadcrumb>
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