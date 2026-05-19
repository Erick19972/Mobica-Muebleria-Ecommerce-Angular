import {
  Injectable,
  signal
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<any[]>([]);

  addToCart(product: any) {

    this.cartItems.update(items => [
      ...items,
      product
    ]);

  }

  removeFromCart(productId: number) {

    this.cartItems.update(items =>
      items.filter(
        item => item.id !== productId
      )
    );

  }

  clearCart() {

    this.cartItems.set([]);

  }

  getTotal() {

    return this.cartItems()
      .reduce(
        (total, item) =>
          total + item.price,
        0
      );

  }

}