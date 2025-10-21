import { Component, Input } from '@angular/core';
import { Product } from '../../models/productListResponse';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product!:Product;
}
