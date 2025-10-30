import { Injectable, signal } from '@angular/core';
import { UserState } from '../models/userStateModel';
import {jwtDecode} from "jwt-decode"
import { UserJwtModel } from '../models/userJwtModel';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userState = signal<UserState>({isLoggedIn:false});

  constructor() {
    this.loadInitialState();
  }

  loadInitialState() {
    const jwt = localStorage.getItem("token");

    if(jwt)
    {
       const decodedJwt = jwtDecode<UserJwtModel>(jwt);
       this.userState.set({isLoggedIn: true, user: {sub:decodedJwt.sub!, roles: decodedJwt.roles}})
    }
  }

  login() {
    // BFF (BackendForFrontend)
    // Simülasyon -> normalde backendden gelir.

    //....
    const jwt:string = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJzdWIiOiJzdHJpbmciLCJpYXQiOjE3NjE4MDY4NTEsImV4cCI6MTc2MTgxNTg1MX0.rdtEqR7BJtOYNItwIpeU3P1keIKLRNfZpgO7s72F5YM";
    localStorage.setItem("token", jwt)

    const decodedJwt = jwtDecode<UserJwtModel>(jwt);
    console.log(decodedJwt);

    this.userState.set({isLoggedIn: true, user: {sub:decodedJwt.sub!, roles: decodedJwt.roles}})
    console.log(this.userState());
  }
}
