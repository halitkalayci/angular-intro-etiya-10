import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerCreation } from '../../../services/customer-creation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './personal-info.html',
  styleUrl: './personal-info.scss'
})
export class PersonalInfo {
  personalInfoForm!:FormGroup;

  constructor(private fb:FormBuilder, private customerCreationService:CustomerCreation, private router:Router) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.personalInfoForm = this.fb.group({
      firstName: new FormControl(this.customerCreationService.state().firstName ?? "", [Validators.required]),
      lastName: new FormControl(this.customerCreationService.state().lastName ?? "", [Validators.required]),
      email: new FormControl(this.customerCreationService.state().email ?? "", [Validators.required,Validators.email]),
    })
  }

  submit() {
    // 1. validasyon
    if(!this.personalInfoForm.valid){
      alert("Tüm alanları eksiksiz doldurunuz.") //TODO: Daha modern.
      return;
    }

    // 2. Global state'de bu sayfayla alakalı yerleri doldurmak.
    const newValue = {...this.customerCreationService.state(), ...this.personalInfoForm.value};
    this.customerCreationService.state.set(newValue);

    this.router.navigateByUrl("/customer-create/contact-info")
  }
}
