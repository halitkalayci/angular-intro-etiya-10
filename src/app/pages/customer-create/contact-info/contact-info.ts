import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { CustomerCreation } from '../../../services/customer-creation';
import { Router, RouterLink } from "@angular/router";
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Address } from '../../../models/createCustomerModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule,RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss'
})
export class ContactInfo {
  addressForm!: FormGroup;

  //ChangeDetectorRef'e gitmeden denenmesi gereken şey -> CommonModule
  constructor(private customerCreationService:CustomerCreation, private fb:FormBuilder,private router:Router){}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.addressForm = this.fb.group({
      addresses: this.fb.array([])
    })

    const currentAddresses = this.customerCreationService.state().addresses;
    if(currentAddresses && currentAddresses.length > 0){
      currentAddresses.forEach(addr => this.addAddress(addr));
    }else{
      this.addAddress();
    }
  }

  get addresses() {
    return this.addressForm.get('addresses') as FormArray;
  }

  newAddress(address?:Address) {
    return this.fb.group({
      city: new FormControl(address?.city ?? '', [Validators.required]),
      street: new FormControl(address?.street ?? '', [Validators.required])
    })
  }

  addAddress(address?:Address){
    this.addresses.push(this.newAddress(address));
  }

  onSubmit(): void {
    if(this.addressForm.valid){
      const newValue = {...this.customerCreationService.state(), ...this.addressForm.value};
      console.log(newValue)
      this.customerCreationService.state.set(newValue);
      this.router.navigateByUrl("/customer-create/preview")
    }
  }

  onCancel(): void {
  }
}
