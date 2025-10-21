import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root', // bu component başka componentlarda <app-root></app-root> şeklinde kullanılır
  templateUrl: './app.html', // HTML şablon dosyasının yolu
  styleUrl: './app.scss', // Stil dosyasının yolu
  imports: [FormsModule,ProductList], // bu componentin kullandığı diğer componentler, direktifler veya pipe'lar
})
export class App {
  public name: string = "Halit";
  public dynamicClass :string = "my-btn";

  onClick() {
    alert("Butona tıklandı!");
    this.name = "Ahmet";
  }

  submit() {
    alert(this.name);
    this.dynamicClass = "my-btn-clicked";
  }
}
