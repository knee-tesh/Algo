import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = value || '';
    let limit:number = 12;

    if (value) {
      const words = value.split(/\s+/);
      if (value.length > Math.abs(limit)) {
        result = words[0]+" "+words[1].slice(0,1);        
      }
    }
  
    return result;
  }

}
