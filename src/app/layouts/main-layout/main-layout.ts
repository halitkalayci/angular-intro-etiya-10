import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  constructor(public authService:AuthService) {}
}
