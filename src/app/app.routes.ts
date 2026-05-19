import { Routes } from '@angular/router';

import { Home } from './features/home/pages/home/home';

import { ProductListComponent } from './features/products/pages/product-list/product-list';

import { ProductDetailComponent } from './features/products/pages/product-detail/product-detail';

import { Cart } from './features/cart/pages/cart/cart';

import { Checkout } from './features/checkout/pages/checkout/checkout';

import { Favorites } from './features/favorites/pages/favorites/favorites';

export const routes: Routes = [

  /* HOME */
  {
    path: '',
    component: Home
  },

  /* LISTADO GENERAL */
  {
    path: 'products',
    component: ProductListComponent
  },

  /* 🔥 CATEGORÍAS DINÁMICAS */
  {
    path: 'categoria/:category',
    component: ProductListComponent
  },

  /* DETALLE PRODUCTO */
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },

  /* CARRITO */
  {
    path: 'cart',
    component: Cart
  },

  /* CHECKOUT */
  {
    path: 'checkout',
    component: Checkout
  },

  /* FAVORITOS */
  {
    path: 'favorites',
    component: Favorites
  },

  /* REDIRECT */
  {
    path: '**',
    redirectTo: ''
  }

];