import { Component } from '@angular/core';
import { Sidebar } from './shared/components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar],
  template: `
    <app-sidebar [items]="menu"></app-sidebar>
  `
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
      label: 'Vehículos',
      icon: 'pi pi-car',
      route: '/vehicles',
    },
  ];
}