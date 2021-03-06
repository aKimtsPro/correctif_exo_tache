import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObsWithStatusPipe } from './pipes/obs-with-status.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPresentPipe } from './pipes/filter-present.pipe';
import { FilterTachePipe } from './pipes/filter-tache.pipe';
import { SortTachePipe } from './pipes/sort-tache.pipe';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    ObsWithStatusPipe,
    FilterPipe,
    FilterPresentPipe,
    FilterTachePipe,
    SortTachePipe,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ObsWithStatusPipe,
    FilterPipe,
    FilterPresentPipe,
    FilterTachePipe,
    SortTachePipe,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
