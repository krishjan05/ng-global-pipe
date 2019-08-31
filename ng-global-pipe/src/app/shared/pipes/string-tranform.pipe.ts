import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringTranform'
})
export class StringTranformPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
