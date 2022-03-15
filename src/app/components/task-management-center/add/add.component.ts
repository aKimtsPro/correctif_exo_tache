import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TACHE_FORM } from 'src/app/forms/tache.form';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  deadlineIncluded = false;
  descriptionIncluded = false;
  tacheForm : FormGroup;

  constructor(
    builder: FormBuilder, 
    private service: TacheService,
    private router: Router
  ) {
    this.tacheForm = builder.group(TACHE_FORM);
  }

  ngOnInit(): void {
  }

  
  toggleDescription(){
    this.descriptionIncluded = !this.descriptionIncluded;
    this.tacheForm.patchValue({description: null })
  }

  toggleDeadline(){
    this.deadlineIncluded = !this.deadlineIncluded;
    this.tacheForm.patchValue({deadLine: null })
  }

  onSubmit(){
    console.log(this.tacheForm)
    if(this.tacheForm.valid)
      this.service.insert(this.tacheForm.value).subscribe(() => this.router.navigateByUrl('/tache') );
  }

  onReset(){
    this.tacheForm.patchValue({
      intitule: null,
      priorite: 'moyen',
      description: null,
      deadLine: null
    });

    this.deadlineIncluded = false;
    this.descriptionIncluded = false;
  }
}
