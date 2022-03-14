import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounce, debounceTime, interval } from 'rxjs';
import { TACHE_FILTER_OPTIONS } from 'src/app/forms/tache-options.form';
import { FilterOptions } from 'src/app/models/tache-options.model';

@Component({
  selector: 'app-filter-tool',
  templateUrl: './filter-tool.component.html',
  styleUrls: ['./filter-tool.component.scss']
})
export class FilterToolComponent implements OnInit {

  @Output()
  filter= new EventEmitter<FilterOptions>();

  filterOptionsForm: FormGroup;

  constructor(builder: FormBuilder) {
    this.filterOptionsForm = builder.group(TACHE_FILTER_OPTIONS);
    this.setupForm();
  }

  ngOnInit(): void {
  }

  setupForm(){
    this.filterOptionsForm.controls['deadlineAvant'].disable();
    this.filterOptionsForm.controls['termineAvant'].disable();    

    this.filterOptionsForm.controls['deadline'].valueChanges.subscribe(value => {
      if(value && !this.filterOptionsForm.controls['deadlineAvant'].enabled )
        this.filterOptionsForm.controls['deadlineAvant'].enable();
      else if(this.filterOptionsForm.controls['deadlineAvant'].enabled)
        this.filterOptionsForm.controls['deadlineAvant'].disable();
    })

    this.filterOptionsForm.controls['termine'].valueChanges.subscribe(value => {
      if(value && !this.filterOptionsForm.controls['termineAvant'].enabled)
        this.filterOptionsForm.controls['termineAvant'].enable();
      else if(this.filterOptionsForm.controls['termineAvant'].enabled)
        this.filterOptionsForm.controls['termineAvant'].disable();
    })
  }

  onSubmit(){
    let values: FilterOptions = this.filterOptionsForm.value;
    this.filter.emit({
      hasDescription: values.hasDescription ? values.hasDescription : undefined,
      deadline: values.deadline === true || values.deadline === false  ? values.deadline : undefined,
      termine: values.termine === true || values.termine === false ? values.termine : undefined,
      intituleIncludes: values.intituleIncludes ? values.intituleIncludes : undefined,
      priorite: values.priorite ? values.priorite : undefined,
      prioriteHigherThan: values.prioriteHigherThan ? values.prioriteHigherThan : undefined,
      deadlineAvant: values.deadlineAvant ? new Date(values.deadlineAvant) : undefined,
      termineAvant: values.termineAvant ? new Date(values.termineAvant) : undefined
    })
  }

}
