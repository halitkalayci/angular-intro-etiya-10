import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate' // Html'in içinde kullanılacak isim.
})
export class TruncatePipe implements PipeTransform {

  // value => pipe'ın uygulanacağı değer.
  // valuedan sonraki her parametre argümandır.
  transform(value: string, limit:number=50): string {
    if(!value)
      return "";
    
    if (value.length <= limit)
      return value;

    return value.substring(0, limit) + "...";
  }
  // Typescriptte 
  // ...args kullanımını araştıralım.

}
