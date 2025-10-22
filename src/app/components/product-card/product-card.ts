import { Component, Input } from '@angular/core';
import { Product } from '../../models/productListResponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product!:Product;
}
// ALT GR + T => ₺