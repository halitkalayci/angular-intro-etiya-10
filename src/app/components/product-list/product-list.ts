import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductListResponse } from '../../models/productListResponse';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
//  implements OnInit => opsiyonel ama faydalı (yazım yanlışlarına karşı.)
export class ProductList implements OnInit {
  products:Product[]=[
    {id:1,name:"Ürün 1", price:500, stock:100, imgUrl: "https://placehold.co/600x400?text=%C3%9Cr%C3%BCn+1"},
    {id:2,name:"Ürün 2", price:1500, stock:250},
    {id:3,name:"Ürün 3", price:500, stock:100},
    {id:4,name:"Ürün 4", price:600, stock:250}
  ]
  productResponse!:ProductListResponse;

  // Ctor parametreleri ekstra parametrelerle açılmak zorunda değil otomatik this. altına eklenir.
  constructor(private httpClient:HttpClient) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.httpClient
        .get<ProductListResponse>("https://dummyjson.com/products")
        .subscribe({
          next:(response:ProductListResponse) => {
            this.productResponse = response;
          },
          error: (err:any) => {
            console.log("Hata alındı: ", err)
          },
          complete: () =>  {
            console.log("Hata ya da cevap başarılı geldi. İstek bitti.")
          }
        })
  }
}
