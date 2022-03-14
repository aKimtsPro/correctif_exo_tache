import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  id!: number;

  constructor(private route: ActivatedRoute, private service: TacheService, private router: Router) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  delete(){
    this.service.delete(this.id)
      .subscribe(()=>this.router.navigateByUrl("/tache"));
  }

}
