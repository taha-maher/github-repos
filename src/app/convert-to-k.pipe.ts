import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToK'
})
export class ConvertToKPipe implements PipeTransform {

  transform(num: String): String {
    let numInK = Number(num)/1000;
    if(numInK >= 1){
      return numInK+"K";
    }
    else {
      return num;
    }
  }

}
