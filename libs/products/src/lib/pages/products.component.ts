import { Component } from '@angular/core';
import { worksFormat } from '@ngDay/utils/format';

@Component({
  selector: 'ng-day-products',
  template: `
    <h1>{{ title }}</h1>

    <p>{{ text }}</p>
  `,
})
export class ProductsComponent {
  title = 'Products';
  text = worksFormat(this.title);
}
