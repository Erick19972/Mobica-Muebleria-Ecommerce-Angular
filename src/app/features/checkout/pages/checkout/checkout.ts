import {
  Component,
  inject,
  OnInit,
  signal
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import {
  ActivatedRoute
} from '@angular/router';

import { ProductService }
from '../../../../core/services/product';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class Checkout implements OnInit {

  /* ROUTE */
  private route: ActivatedRoute =
    inject(ActivatedRoute);

  /* PRODUCT SERVICE */
  private productService: ProductService =
    inject(ProductService);

  /* PRODUCT */
  product = signal<any>(null);

  ngOnInit(): void {

    const productId = Number(
      this.route.snapshot
        .queryParamMap
        .get('productId')
    );

    const foundProduct =
      this.productService
        .getProductById(productId);

    this.product.set(foundProduct);

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