import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CartComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class CartModule {}
