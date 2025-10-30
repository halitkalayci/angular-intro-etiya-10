import { Injectable, signal } from '@angular/core';
import { UserState } from '../models/userStateModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userState = signal<UserState>({isLoggedIn:false});


  login() {
    // BFF (BackendForFrontend)
    // Simülasyon -> normalde backendden gelir.

    //....
    const jwt:string = "abc";
    localStorage.setItem("token",jwt)
  }
}
