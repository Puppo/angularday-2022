import { Component } from '@angular/core';

@Component({
  selector: 'ng-day-root',
  template: `
    <ng-day-nav-bar [navItems]="navItems"></ng-day-nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Cart', path: '/cart' },
  ];
}
