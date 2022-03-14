import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { FilterOptions, SortOptions } from 'src/app/models/tache-options.model';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  loading= true;
  taches$!: Observable<Tache[]>;
  pageSize = 20;
  page = 1;
  filterDisplayed=false;
  triDisplayed=false;

  filter?: FilterOptions;
  sort?: SortOptions;

  termine?: boolean = undefined;
  deadline?: boolean = undefined;

  constructor(private service: TacheService) {
    this.loadTaches();
    service.$updated.subscribe(() => this.loadTaches());
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.deadline);
  }

  ngOnInit(): void {
  }

  loadTaches(){
    this.taches$ = this.service.getAll().pipe(tap(e => console.log(typeof e[0].dateTermine)));
  }

  changeTermine(termine:any){
    this.termine = termine === 'undefined' ? undefined : termine === 'true' ? true : false ;
  }

  changeDeadline(deadline: any){
    this.deadline = deadline === 'undefined' ? undefined : deadline === 'true' ? true : false ;
  }

  onFilter(filter: FilterOptions) {
    this.filter = filter;
    this.toggleFiltrer();
  }

  toggleFiltrer(){
    this.filterDisplayed = !this.filterDisplayed;
  }

  resetFilter(){
    this.filter = undefined;
  }

  toggleTri(){
    this.triDisplayed = !this.triDisplayed;
  }

  onSort(sortOption: SortOptions){
    this.sort = sortOption;
    this.toggleTri()
  }

  resetSort(){
    this.sort = undefined;
  }
}
