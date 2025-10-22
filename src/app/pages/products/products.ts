import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductList } from "../../components/product-list/product-list";

@Component({
  selector: 'app-products',
  imports: [RouterLink, ProductList],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {

}
