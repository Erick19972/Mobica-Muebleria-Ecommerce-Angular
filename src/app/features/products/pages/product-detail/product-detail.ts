import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../core/services/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule], // 🔥 IMPORTANTE
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss']
})
export class ProductDetailComponent {

  route = inject(ActivatedRoute);
  productService = inject(ProductService);

  product = this.productService.getProductById(
    Number(this.route.snapshot.paramMap.get('id'))
  );
}