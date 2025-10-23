import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = signal<boolean>(false);

  setIsLoading(loading:boolean)
  {
    this.isLoading.set(loading);
  }
}
