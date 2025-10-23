import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit{
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder) {}

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
    }

  }
}
