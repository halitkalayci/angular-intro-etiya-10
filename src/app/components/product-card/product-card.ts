import { Component, Input } from '@angular/core';
import { Product } from '../../models/productListResponse';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product!:Product;
}
// ALT GR + T => ₺