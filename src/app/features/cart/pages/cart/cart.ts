import {
  Component,
  computed,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { RouterModule }
from '@angular/router';

import { CartService }
from '../../../../core/services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart {

  private cartService: CartService =
    inject(CartService);

  cartItems = computed(() =>
    this.cartService.cartItems()
  );

  total = computed(() =>
    this.cartService.getTotal()
  );

  remove(id: number) {

    this.cartService.removeFromCart(id);

  }

  async pagar() {

    const response = await fetch(
      'http://localhost:3000/create-checkout-session',
      {
        method: 'POST',
      }
    );

    const data = await response.json() as {
      url: string;
    };

    window.location.href = data.url;

  }

}