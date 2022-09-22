import { Component } from '@angular/core';
import { worksFormat } from '@ngDay/utils/format';

@Component({
  selector: 'ng-day-home',
  template: `
    <h1>{{ title }}</h1>

    <p>{{ text }}</p>
  `,
})
export class HomeComponent {
  title = 'Home';
  text = worksFormat(this.title);
}
