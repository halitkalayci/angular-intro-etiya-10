import { Component, signal } from '@angular/core';

interface Address {
  id: number;
  city: string;
  street: string;
}

@Component({
  selector: 'app-contact-info',
  imports: [],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss'
})
export class ContactInfo {
 addresses = signal<Address[]>([
    { id: 1, city: '', street: '' }
  ]);

  private nextId = 2;

  addAddress(): void {
    this.addresses.update((current:any) => [
      ...current,
      { id: this.nextId++, city: '', street: '' }
    ]);
  }

  removeAddress(id: number): void {
    if (this.addresses().length > 1) {
      this.addresses.update((current:any) => 
        current.filter((address:any) => address.id !== id)
      );
    }
  }

  onSubmit(): void {
    console.log('Adresler:', this.addresses());
    // Burada router.navigate veya service çağrısı yapabilirsiniz
  }

  onCancel(): void {
    console.log('İptal edildi');
    // Burada router.navigate ile geri dönebilirsiniz
  }
}
