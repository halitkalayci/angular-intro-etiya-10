import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products:Product[]=[
    {name:"Ürün 1", price:500, stock:100},
    {name:"Ürün 2", price:1500, stock:250},
    {name:"Ürün 3", price:500, stock:100},
    {name:"Ürün 4", price:600, stock:250}
  ]
}
