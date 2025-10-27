import { Injectable, signal } from '@angular/core';
import { CreateCustomerModel } from '../models/createCustomerModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerCreation {
  public state = signal<CreateCustomerModel>({});
}
