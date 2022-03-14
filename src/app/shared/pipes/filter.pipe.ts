import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterOn: string[], values: any[]): any[] {
    return value.filter(element => {
      for(let index in filterOn){
        const prop: string = filterOn[index];
        if( element[prop] !== values[index] )
          return false;
      }
      return true;
    });
  }

}
