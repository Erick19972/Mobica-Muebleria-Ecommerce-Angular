import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import {
  ActivatedRoute,
  RouterModule
} from '@angular/router';

import { ProductService }
from '../../../../core/services/product';

import { CartService }
from '../../../../core/services/cart';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductListComponent {

  /* =========================
     SERVICES
  ========================= */
  private productService: ProductService =
    inject(ProductService);

  private cartService: CartService =
    inject(CartService);

  private route: ActivatedRoute =
    inject(ActivatedRoute);

  /* =========================
     CATEGORY
  ========================= */
  category = signal('');

  /* =========================
     FILTERS
  ========================= */
  selectedPrice =
    signal<string | null>(null);

  selectedColor =
    signal<string | null>(null);

  selectedMaterial =
    signal<string | null>(null);

  selectedSize =
    signal<string | null>(null);

  /* =========================
     PRODUCTS
  ========================= */
  products = computed(() => {

    const currentCategory =
      this.category();

    /* =========================
       CATEGORY FILTER
    ========================= */
    let filtered =
      this.productService
        .getProducts()()
        .filter(product => {

          return product.category
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            === currentCategory;

        });

    /* =========================
       PRICE FILTER
    ========================= */
    if (this.selectedPrice()) {

      filtered = filtered.filter(product => {

        const price = product.price;

        switch (this.selectedPrice()) {

          case '1':
            return price <= 2999;

          case '2':
            return price >= 3000
              && price <= 5999;

          case '3':
            return price >= 6000
              && price <= 8999;

          case '4':
            return price >= 9000
              && price <= 11999;

          case '5':
            return price >= 12000;

          default:
            return true;

        }

      });

    }

    /* =========================
       COLOR FILTER
    ========================= */
    if (this.selectedColor()) {

      filtered = filtered.filter(product => {

        return product.color
          === this.selectedColor();

      });

    }

    /* =========================
       MATERIAL FILTER
    ========================= */
    if (this.selectedMaterial()) {

      filtered = filtered.filter(product => {

        return product.material
          === this.selectedMaterial();

      });

    }

    /* =========================
       SIZE FILTER
    ========================= */
    if (this.selectedSize()) {

      filtered = filtered.filter(product => {

        return product.size
          === this.selectedSize();

      });

    }

    return filtered;

  });

  /* =========================
     HERO IMAGE
  ========================= */
  banner = computed(() => {

    const firstProduct =
      this.products()[0];

    return firstProduct?.banner ||
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85';

  });

  /* =========================
     CONSTRUCTOR
  ========================= */
  constructor() {

    this.route.paramMap.subscribe(params => {

      const categoryParam =
        params.get('category') || '';

      this.category.set(categoryParam);

    });

  }

  /* =========================
     FILTER PRICE
  ========================= */
  filterPrice(value: string) {

    /* TOGGLE FILTER */
    if (this.selectedPrice() === value) {

      this.selectedPrice.set(null);

      return;

    }

    this.selectedPrice.set(value);

  }

  /* =========================
     FILTER COLOR
  ========================= */
  filterColor(color: string) {

    if (this.selectedColor() === color) {

      this.selectedColor.set(null);

      return;

    }

    this.selectedColor.set(color);

  }

  /* =========================
     FILTER MATERIAL
  ========================= */
  filterMaterial(material: string) {

    if (this.selectedMaterial() === material) {

      this.selectedMaterial.set(null);

      return;

    }

    this.selectedMaterial.set(material);

  }

  /* =========================
     FILTER SIZE
  ========================= */
  filterSize(size: string) {

    if (this.selectedSize() === size) {

      this.selectedSize.set(null);

      return;

    }

    this.selectedSize.set(size);

  }

  /* =========================
     ADD TO CART
  ========================= */
  addToCart(product: any) {

    this.cartService
      .addToCart(product);

    alert(
      `${product.title} añadido al carrito`
    );

  }

}