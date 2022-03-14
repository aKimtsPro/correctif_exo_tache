import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-terminate',
  templateUrl: './terminate.component.html',
  styleUrls: ['./terminate.component.scss']
})
export class TerminateComponent implements OnInit {

  tache!: Tache;
  canTerminate: boolean = true;

  constructor(
    private service: TacheService, 
    private route: ActivatedRoute,
    private router: Router
  ) { 
    route.params.subscribe(params => {
      service.getOne(params['id']).subscribe((tache) => {
        this.tache = tache;
        this.canTerminate = !tache.dateTermine && (!tache.deadLine || new Date() < new Date(tache.deadLine));
      })
    })
  }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigateByUrl('/tache')
  }

  terminate(){
    console.log(this.tache)
    this.service.finish(this.tache.id).subscribe({
      next: () => this.router.navigate(['tache', this.tache.id])
    })
  }
}
