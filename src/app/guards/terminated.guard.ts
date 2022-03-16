import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { concatMap, Observable, of } from 'rxjs';
import { TacheService } from '../services/tache.service';

@Injectable({
  providedIn: 'root'
})
export class TerminatedGuard implements CanActivate {

  constructor(
    private service: TacheService,
    private router: Router
  ){}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
      return this.service.getOne(route.params['id']).pipe(concatMap(tache => {
        if(tache.dateTermine)
          this.router.navigateByUrl("/tache");
        return tache.dateTermine ? of(false) : of(true)
      }));
  }
  
}
