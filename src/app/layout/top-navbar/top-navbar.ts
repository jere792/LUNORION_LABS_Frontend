import { Component, input } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  templateUrl: './top-navbar.html',
  styleUrls: ['./top-navbar.scss']
})

export class TopNavbar {
  pageTitle = input('Dashboard');
}