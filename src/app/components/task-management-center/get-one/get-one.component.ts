import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.scss']
})
export class GetOneComponent implements OnInit {

  tache?: Tache; 
  loading: boolean = true;

  constructor(private service: TacheService,private route: ActivatedRoute) {
    this.loadTache(route.snapshot.params['id']);
    route.params.subscribe(params => this.loadTache(params['id']));
  }

  ngOnInit(): void {
  }

  loadTache(id: number){
    this.tache = undefined;
    this.service.getOne(id).subscribe(tache => {
      this.tache = tache;
    });
  }

}
