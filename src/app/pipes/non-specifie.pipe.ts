import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nonSpecifie'
})
export class NonSpecifiePipe implements PipeTransform {

  transform(value: any): any {
    return value ? value : 'non spécifié';
  }

}
