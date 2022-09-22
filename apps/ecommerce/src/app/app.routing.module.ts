import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('@ngDay/products').then((m) => m.ProductsModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('@ngDay/cart').then((m) => m.CartModule),
  },
  {
    path: '',
    loadChildren: () => import('@ngDay/home').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
