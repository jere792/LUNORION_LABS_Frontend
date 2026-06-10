import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  template: `
    <aside class="sidebar">
      <h3>{{ title }}</h3>
      <ul>
        @for (item of items; track item.route){
          <li>{{item.label}}</li>
        }
      </ul>
    </aside>
  `,
  styles: ``,
})
export class Sidebar {
  @Input() title = '';
  @Input() items: { label: string; route: string }[] = [];

}
