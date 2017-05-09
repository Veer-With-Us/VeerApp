import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
}) export class MaxLengthPipe implements PipeTransform {
  transform(val) {
    if (val.length > 50) {
      return val.substring(0, 50) + '...';
    } else {
      return val;
    }
  }
}