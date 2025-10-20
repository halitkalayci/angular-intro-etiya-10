import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // bu component başka componentlarda <app-root></app-root> şeklinde kullanılır
  templateUrl: './app.html', // HTML şablon dosyasının yolu
  styleUrl: './app.scss' // Stil dosyasının yolu
})
export class App {
  public name: string = "Halit";

  onClick() {
    alert("Butona tıklandı!");
  }
}
