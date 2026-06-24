import { Component } from '@angular/core';
import { Sidebar } from './layout/sidebar/sidebar';
import { TopNavbar } from './layout/top-navbar/top-navbar';
import { Breadcrumb } from './layout/breadcrumb/breadcrumb';
import { LoadingSpinner } from './layout/loading-spinner/loading-spinner';
import { LoadingSkeleton } from './layout/loading-skeleton/loading-skeleton';
import { ConfirmationDialog } from './layout/confirmation-dialog/confirmation-dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, TopNavbar, Breadcrumb, LoadingSpinner, LoadingSkeleton, ConfirmationDialog],
  template: `
  <div class="layout">

    <app-sidebar
      [items]="menu"
      [title]="'LurionLabs'" 
      [backgroundColor]="'#1d2230'"
      [permissions]="['customers:view']">
    </app-sidebar>

    <div class="main-content">
      <app-top-navbar
        [backgroundColor]="'#27324b'"
        [userName]="'Pan con Soledad'"
        [userRole]="'Administrador'"
        [notifications]="3">

        <app-breadcrumb
          [items]="breadcrumbItems">
        </app-breadcrumb>
      </app-top-navbar>

      <app-loading-spinner></app-loading-spinner>

      <app-loading-skeleton></app-loading-skeleton>

      <app-confirmation-dialog
        type="danger"
        title="Eliminar cliente"
        message="¿Está seguro que desea eliminar este cliente?">
      </app-confirmation-dialog>

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
  breadcrumbItems = [
    {
      label: 'Inicio',
      route: '/'
    },
    {
      label: 'Clientes',
      route: '/'
    },
    {
      label: 'Detalle Cliente'
    }
  ];
}