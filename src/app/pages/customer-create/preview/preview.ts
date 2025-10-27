// customer-preview.component.ts
import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CustomerCreation } from '../../../services/customer-creation';

@Component({
  selector: 'app-customer-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './preview.html',
  styleUrls: ["./preview.scss"]
})
export class CustomerPreviewComponent {
  private customerCreationService = inject(CustomerCreation);
  private router = inject(Router);

  // Signal'den state'i al
  customerState = this.customerCreationService.state;

  // Computed değerler
  addressCount = computed(() => 
    this.customerState().addresses?.length ?? 0
  );

  hasPersonalInfo = computed(() => {
    const state = this.customerState();
    return !!(state.firstName || state.lastName || state.email);
  });

  completionPercentage = computed(() => {
    const state = this.customerState();
    let completed = 0;
    let total = 4; // toplam alan sayısı

    if (state.firstName) completed++;
    if (state.lastName) completed++;
    if (state.email) completed++;
    if (state.addresses && state.addresses.length > 0) completed++;

    return Math.round((completed / total) * 100);
  });

  onEdit(): void {
    // İlk adıma geri dön veya düzenleme moduna geç
    this.router.navigate(['/customer/create/personal']);
  }

  onConfirm(): void {
    console.log('Müşteri kaydediliyor:', this.customerState());
    // API çağrısı yap
    // this.customerService.create(this.customerState()).subscribe(...)
  }
}