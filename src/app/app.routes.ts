import {
  Routes
} from '@angular/router';

/* =========================
   PAGES
========================= */
import {
  Home
} from './features/home/pages/home/home';

import {
  ProductListComponent
} from './features/products/pages/product-list/product-list';

import {
  ProductDetailComponent
} from './features/products/pages/product-detail/product-detail';

import {
  Cart
} from './features/cart/pages/cart/cart';

import {
  Checkout
} from './features/checkout/pages/checkout/checkout';

import {
  Favorites
} from './features/favorites/pages/favorites/favorites';

import {
  Register
} from './features/auth/pages/register/register';

/* =========================
   AUTH
========================= */
import {
  Login
} from './features/auth/pages/login/login';

/* =========================
   STORES
========================= */
import {
  Stores
} from './features/stores/pages/stores/stores';

/* =========================
   GUARD
========================= */
import {
  authGuard
} from './core/guards/auth-guard';

export const routes: Routes = [

  /* =========================
     HOME
  ========================= */
  {
    path: '',
    component: Home
  },

  /* =========================
     LOGIN
  ========================= */
  {
    path: 'login',
    component: Login
  },


  {
    path: 'register',
    component: Register
  },


  /* =========================
     STORES
  ========================= */
  {
    path: 'tiendas',
    component: Stores
  },

  /* =========================
     PRODUCTS
  ========================= */
  {
    path: 'products',
    component: ProductListComponent
  },

  /* =========================
     CATEGORY
  ========================= */
  {
    path: 'categoria/:category',
    component: ProductListComponent
  },

  /* =========================
     PRODUCT DETAIL
  ========================= */
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },

  /* =========================
     CART
  ========================= */
  {
    path: 'cart',
    component: Cart
  },

  /* =========================
     CHECKOUT
  ========================= */
  {
    path: 'checkout',
    component: Checkout,

    /* 🔥 PROTECTED ROUTE */
    canActivate: [
      authGuard
    ]
  },

  /* =========================
     FAVORITES
  ========================= */
  {
    path: 'favorites',
    component: Favorites,

    /* 🔥 PROTECTED ROUTE */
    canActivate: [
      authGuard
    ]
  },

  /* =========================
     FALLBACK
  ========================= */
  {
    path: '**',
    redirectTo: ''
  }

];