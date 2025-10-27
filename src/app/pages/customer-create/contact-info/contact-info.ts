import { Component, signal } from '@angular/core';
import { CustomerCreation } from '../../../services/customer-creation';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-info',
  imports: [RouterLink],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss'
})
export class ContactInfo {
  constructor(private customerCreationService:CustomerCreation){}

  ngOnInit() {
    if(!this.customerCreationService.state().addresses){
      this.customerCreationService.state().addresses = [{city:'',street:''}]
    }
  }

  onSubmit(): void {
    // Burada router.navigate veya service çağrısı yapabilirsiniz
  }

  onCancel(): void {
    // Burada router.navigate ile geri dönebilirsiniz
  }
}
