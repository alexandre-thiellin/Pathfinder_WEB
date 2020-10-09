import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'weight'})
export class WeightPipe implements PipeTransform {

  transform(value: number): string {
    let priceS = '';
    if (value >= 1000) {
      priceS += (Math.trunc(value / 1000)).toString();
      priceS += ' Kg ';
    }
    if (value % 1000 !== 0) {
      priceS += (value % 1000).toString();
      priceS += ' g';
    }
    return priceS;
  }
}
