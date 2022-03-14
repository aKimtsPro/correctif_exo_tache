import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concatMap, Observable, Subject, switchMap, tap, throwError } from 'rxjs';
import { TacheForm} from '../forms/tache.form';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private readonly BASE_URL = "http://localhost:3000/taches";
  private updated = new Subject<null>();

  constructor(private client: HttpClient) { }

  getAll(): Observable<Tache[]>{
    return this.client.get<Tache[]>(this.BASE_URL);
  }

  getOne(id: number): Observable<Tache> {
    return this.client.get<Tache>(this.BASE_URL+'/'+ id);
  }

  update(id: number, form: TacheForm): Observable<Tache>{
    return this.client.patch<Tache>(this.BASE_URL+'/'+id, form).pipe(tap(() => this.updated.next(null)));
  }

  delete(id: number){
    return this.client.delete(this.BASE_URL+'/'+id).pipe(tap(() => this.updated.next(null)));
  }

  insert(form: TacheForm): Observable<Tache>{
    return this.client.post<Tache>(this.BASE_URL, {
      id: null,
      intitule: form.intitule,
      priorite: form.priorite,
      description: form.description,
      deadLine: form.deadLine,
      dateCreation: new Date(),
      dateTermine: null,
    }).pipe(tap(() => this.updated.next(null)));
  }

  finish(id: number) {
    return this.getOne(id).pipe(
      concatMap(tache => {
        if(!tache.dateTermine && (!tache.deadLine || (new Date(tache.deadLine) >= new Date())) ){
          return this.client.patch(this.BASE_URL+'/'+id, {
            'dateTermine': new Date().toISOString()
          })
        }
        else 
          return throwError(() => {message: 'impossible de terminer un tache post deadline'})
      }),
      tap(() => this.updated.next(null))
    );
  }

  public get $updated(): Observable<null>{
    return this.updated
  }
}
