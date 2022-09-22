import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type NavItem = {
  label: string;
  path: string;
};

@Component({
  selector: 'ng-day-nav-bar',
  template: `
    <nav>
      <a *ngFor="let item of navItems" [routerLink]="item.path"
        >{{ item.label }}
      </a>
    </nav>
  `,
  styles: [
    `
      nav {
        display: flex;
        background-color: #eee;
      }

      a {
        padding: 1rem 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  @Input() navItems: NavItem[] = [];
}
