import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TACHE_FORM } from 'src/app/forms/tache.form';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  tacheForm: FormGroup;
  tache!: Tache;

  deadlineIncluded = false;
  descriptionIncluded = false;

  constructor(builder: FormBuilder, private route: ActivatedRoute, private service: TacheService) {
    this.tacheForm = builder.group(TACHE_FORM);
    this.loadTache(route.snapshot.params['id']);
    route.params.subscribe((params) => this.loadTache(params['id']));
  }

  ngOnInit(): void {
  }

  loadTache(id: number){
    this.service.getOne(id).subscribe((tache) =>{ 
        this.setupForm(tache);
    })
  }

  setupForm(tache: Tache) {
    this.tache = tache;
        this.tacheForm.patchValue({
          intitule: tache.intitule,
          description: tache.description,
          priorite: tache.priorite,
          deadLine: tache.deadLine
        })
        this.descriptionIncluded = tache.description ? true : false;
        this.deadlineIncluded = tache.deadLine ? true : false;
  }

  onSubmit(){
    console.log(this.tacheForm.value)
    if( this.tache && this.tacheForm.valid ){
      this.service.update(this.tache.id, this.tacheForm.value).subscribe((tache) => {
        this.setupForm(tache);
      });
    }
    else
      alert('form invalide')
  }

  toggleDescription(){
    this.descriptionIncluded = !this.descriptionIncluded;
    this.tacheForm.patchValue({description: this.descriptionIncluded ? this.tache.description : null })
  }

  toggleDeadline(){
    this.deadlineIncluded = !this.deadlineIncluded;
    this.tacheForm.patchValue({deadLine: this.deadlineIncluded ? this.tache.deadLine : null })
  }

  onReset(){
    this.setupForm(this.tache);
  }

}
