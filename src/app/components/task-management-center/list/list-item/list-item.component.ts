import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  tache!: Tache;

  constructor(private service: TacheService, private router: Router) { }

  ngOnInit(): void {
  }

  terminate(){
    this.service.finish(this.tache.id)
      .subscribe({
        next: ()=>this.router.navigate(["tache",this.tache.id]),
        error: (err) => alert('une tâche ne peut être terminée après la deadline')
      });
  }

}
