import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
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
