import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPresent'
})
export class FilterPresentPipe implements PipeTransform {

  transform(value: any[], filterPresent: string[]): any[] {
    return value.filter(element => {
      for (const present of filterPresent) {
        if(!element[present])
          return false;
      }

      return true;
    });
  }

}
