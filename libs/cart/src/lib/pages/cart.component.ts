import { Component } from '@angular/core';
import { worksFormat } from '@ngDay/utils/format';

@Component({
  selector: 'ng-day-cart',
  template: `
    <h1>{{ title }}</h1>

    <p>{{ text }}</p>
  `,
})
export class CartComponent {
  title = 'Cart';
  text = worksFormat(this.title);
}
