import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'currencyP'})
export class CurrencyPPipe implements PipeTransform {

  transform(value: number): string {
    let priceS = '';
    if (value >= 100) {
      priceS += (value / 100).toString();
      priceS += ' Po ';
    }
    if (value >= 10 && value % 100 !== 0) {
      priceS += (value / 10).toString();
      priceS += ' Pa ';
    }
    if (value % 10 !== 0) {
      priceS += (value % 10).toString();
      priceS += ' Pc';
    }
    return priceS;
  }
}
