import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { CommonModule } from '@angular/common';
import { ProductListResponse } from '../../models/productListResponse';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
//  implements OnInit => opsiyonel ama faydalı (yazım yanlışlarına karşı.)
export class ProductList implements OnInit {
  // Ekranda takip edilmesini istiyorum.
  productResponse = signal<ProductListResponse | undefined>(undefined);

  // Ctor parametreleri ekstra parametrelerle açılmak zorunda değil otomatik this. altına eklenir.
  constructor(private productService:ProductService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
   this.productService.getProducts().subscribe({
    next:(response) => this.productResponse.set(response)
   })
  }
}
