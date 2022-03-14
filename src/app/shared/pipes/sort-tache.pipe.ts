import { Pipe, PipeTransform } from '@angular/core';
import { SortOptions } from 'src/app/models/tache-options.model';
import { Tache } from 'src/app/models/tache.model';

@Pipe({
  name: 'sortTache'
})
export class SortTachePipe implements PipeTransform {

  transform(taches: Tache[], sortOptions?: SortOptions): Tache[] {
    const value = [...taches];

    const sortBy = sortOptions?.sortBy;
    const asc = sortOptions?.asc;

    if(!sortBy)
      return value;
    
    return value.sort(
      (tache1, tache2) => {

        if(!tache1[sortBy] && !tache2[sortBy] )
          return 0;
        
        if(!tache1[sortBy] && tache2[sortBy])
          return (asc?1:-1)*1;

        if(tache1[sortBy] && !tache2[sortBy])
          return (asc?1:-1)*-1;

        switch(sortBy){
          case 'priorite':
            return (asc?1:-1)*this.comparePriorities(tache1, tache2);
          case 'deadLine':
            return (asc?1:-1)*this.compareDate(tache1[sortBy], tache2[sortBy]);
          case 'dateCreation':
            return (asc?1:-1)*this.compareDate(tache1[sortBy], tache2[sortBy]);
        }
      }
    );
  }

  comparePriorities(t1: Tache, t2: Tache): number {
    let p1 = 1;
    let p2 = 1;
    switch(t1.priorite){
      case 'bas':
        p1 = 1;
        break;
      case 'moyen':
        p1 = 2;
        break;
      case 'haut':
        p1 = 3;
        break;
    }
    switch(t2.priorite){
      case 'bas':
        p2 = 1;
        break;
      case 'moyen':
        p2 = 2;
        break;
      case 'haut':
        p2 = 3;
        break;
    }

    return p1 - p2;
  }

  compareDate(d1: string|undefined,d2: string|undefined){

    if(d1 && d2)
      return d1 >= d2 ? 1 : -1;
    else if(d1 && !d2)
      return 1;
    else if(!d1 && d2)
      return -1;
    else
      return 0;
  }

}
