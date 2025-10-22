import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductListResponse } from '../models/productListResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) {}
  
  getProducts() : Observable<ProductListResponse> {
    return this.httpClient
               .get<ProductListResponse>("https://dummyjson.com/products");
  }
}
