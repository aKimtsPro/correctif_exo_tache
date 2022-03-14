import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TACHE_SORT_OPTIONS } from 'src/app/forms/tache-options.form';
import { SortOptions } from 'src/app/models/tache-options.model';

@Component({
  selector: 'app-sorting-tool',
  templateUrl: './sorting-tool.component.html',
  styleUrls: ['./sorting-tool.component.scss']
})
export class SortingToolComponent implements OnInit {

  @Input('current-sort')
  currentSort?: SortOptions;

  sortForm: FormGroup;
  @Output('sorting')
  sort = new EventEmitter<SortOptions>();

  constructor(builder: FormBuilder) {
    this.sortForm = builder.group(TACHE_SORT_OPTIONS);
  }

  ngOnInit(): void {
    if(this.currentSort)
      this.sortForm.patchValue({
        sortBy: this.currentSort?.sortBy,
        asc: this.currentSort?.asc
      })
  }

  onSubmit(){
    this.sort.emit({...this.sortForm.value})
  }

}
