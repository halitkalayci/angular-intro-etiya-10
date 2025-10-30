import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit{
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private authService:AuthService) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }
 
  login() {
    console.log("form gönderildi")

    if(this.loginForm.valid)
    {
      console.log("Validasyonlar başarılı, istek gönderiliyor...")
      this.authService.login();
    }

  }
}

// Angular projesi başlatalım.
// Tailwindcss, bootstrap, angular material vb.. bir css framework/kütüphanesi ekleyin.
// CustomerService için ekranları tasarlamaya başlayalım.

// Yalnızca customer service için.

// Global http işlemleri -> interceptor (loading,auth vb..) 
// Kullandığınız bir global formatlama varsa -> pipe
// Olabildiğince component-bazlı tasarımlar -> (create-update customer yalnızca id değişiyor alanlar aynı.)
// Create-Update gibi formlar ReactiveForms olmalı.