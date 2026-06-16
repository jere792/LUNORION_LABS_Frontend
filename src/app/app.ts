import { Component } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { TopNavbar } from './shared/components/top-navbar/top-navbar';
import { Breadcrumb } from './shared/components/breadcrumb/breadcrumb';
import { LoadingSpinner } from './shared/components/loading-spinner/loading-spinner';
import { LoadingSkeleton } from './shared/components/loading-skeleton/loading-skeleton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, TopNavbar, Breadcrumb, LoadingSpinner, LoadingSkeleton],
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

      <app-loading-spinner></app-loading-spinner>

      <app-loading-skeleton></app-loading-skeleton>

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