import { Pipe, PipeTransform } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Tache } from 'src/app/models/tache.model';

@Pipe({
  name: 'obsWithStatus'
})
export class ObsWithStatusPipe implements PipeTransform {

  transform<T>(value:Observable<T>): Observable<{loading: boolean, value?: T, err?: any}> {
    return value.pipe(
      map(value => ({
        loading: false,
        value
      })),
      startWith({
        loading:true
      }),
      catchError(err => of({
        loading:false,
        err
      }))
    );
  }

}
