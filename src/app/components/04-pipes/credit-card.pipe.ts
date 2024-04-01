import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {
  transform(value: string): unknown {
    if (value.length == 15) {
      const lastFourDigits = value.slice(-4);
      const maskedValue = '**** **** *** ' + lastFourDigits;
      return maskedValue;
    }
    if (value.length == 16) {
      const lastFourDigits = value.slice(-4);
      const maskedValue = '**** **** **** ' + lastFourDigits;
      return maskedValue;
    } else {
      return value; // Retornar el valor sin modificar si no tiene 16 dígitos
    }
  }

}
