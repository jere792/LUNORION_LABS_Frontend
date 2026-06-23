import { Component } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { TopNavbar } from './shared/components/top-navbar/top-navbar';
import { Breadcrumb } from './shared/components/breadcrumb/breadcrumb';
import { LoadingSpinner } from './shared/components/loading-spinner/loading-spinner';
import { LoadingSkeleton } from './shared/components/loading-skeleton/loading-skeleton';
import { ConfirmationDialog } from './shared/components/confirmation-dialog/confirmation-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, TopNavbar, Breadcrumb, LoadingSpinner, LoadingSkeleton, ConfirmationDialog],
  template: `
  <div class="layout">

    <app-sidebar
      [items]="menu"
      [title]="'SolveGrades'" 
      [backgroundColor]="'#0f172a'"
      [permissions]="['customers:view']">
    </app-sidebar>

    <div class="main-content">

      <app-top-navbar
        [pageTitle]="'Dashboard'">
      </app-top-navbar>

      <app-breadcrumb
        [items]="['Inicio', 'Dashboard']">
      </app-breadcrumb>

      <app-loading-spinner></app-loading-spinner>

      <app-loading-skeleton></app-loading-skeleton>

      <!-- <app-confirmation-dialog>
      </app-confirmation-dialog> -->

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
      permission: 'customers:view'
    },
    {
      label: 'Clientes',
      icon: 'pi pi-users',
      route: '/customers',
      permission: 'customers:view'
    },
    {
      label: 'Ventas',
      icon: 'pi pi-shopping-cart',
      route: '/sales',
      permission: 'customers:view'
    },
    {
      label: 'Vehículos',
      icon: 'pi pi-car',
      route: '/vehicles',
      permission: 'customers:view'
    },
  ];
}