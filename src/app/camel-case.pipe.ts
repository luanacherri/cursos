import { Pipe, PipeTransform } from '@angular/core';
import { ExecSyncOptionsWithBufferEncoding } from 'child_process';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';

    values.forEach(palavra => {
      result += this.capitalize(palavra) + ' ';
    });

    return result;
  }

  capitalize(palavra: string) {
    return palavra.substring(0 , 1).toUpperCase() + palavra.substring(1).toLowerCase();

  }
}
