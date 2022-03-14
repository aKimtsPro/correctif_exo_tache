import { Pipe, PipeTransform } from '@angular/core';
import { FilterOptions } from 'src/app/models/tache-options.model';
import { Tache } from 'src/app/models/tache.model';

@Pipe({
  name: 'filterTache'
})
export class FilterTachePipe implements PipeTransform {

  transform(value: Tache[], options?: FilterOptions): Tache[] {
    if(options === undefined)
      return value;
    
    return value.filter(tache => {
      if(options?.termine !== undefined && (
          (options?.termine && !tache.dateTermine) ||
          (!options?.termine && tache.dateTermine)))
        return false;

      if(options?.deadline !== undefined && (
          (options?.deadline && !tache.deadLine) ||
          (!options?.deadline && tache.deadLine)))
        return false;

      if(options?.hasDescription !== undefined &&
          ((options?.hasDescription && !tache.description) ||
          (!options?.hasDescription && tache.description)))
        return false;
      

      if(options?.priorite !== undefined && 
          options.priorite != tache.priorite)
        return false;

      if(options?.prioriteHigherThan && 
          !this.filterOnPriorityHigherThan(tache, options.prioriteHigherThan))
        return false;

      if(options?.intituleIncludes !== undefined && 
          !tache.intitule.includes(options.intituleIncludes.trim()))
        return false;

      if(options?.hasDescription !== undefined && 
          ((options.hasDescription && !tache.description) ||
          (!options.hasDescription && tache.description)))
        return false;

      if(options?.termineAvant != undefined && tache.dateTermine != undefined){
        if(options.termineAvant <= new Date( tache.dateTermine))
          return false;
      }

      if(options?.deadlineAvant != undefined && tache.deadLine != undefined){
        if(options.deadlineAvant <= new Date( tache.deadLine))
          return false;
      }
        

      return true;
    });
  }

  filterOnPriorityHigherThan(tache: Tache, priorite: 'bas' | 'moyen' | 'haut'): boolean {
    let than = 1;
    let actual = 1;
    switch(priorite){
      case 'bas':
        than = 1;
        break;
      case 'moyen':
        than = 2;
        break;
      case 'haut':
        than = 3;
        break;
    }
    switch(tache.priorite){
      case 'bas':
        actual = 1;
        break;
      case 'moyen':
        actual = 2;
        break;
      case 'haut':
        actual = 3;
        break;
    }

    return actual >= than;
  }

}
