import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './components/page404/page404.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavItemComponent } from './components/nav/nav-item/nav-item.component';
import { TaskManagementCenterComponent } from './components/task-management-center/task-management-center.component';
import { AddComponent } from './components/task-management-center/add/add.component';
import { UpdateComponent } from './components/task-management-center/update/update.component';
import { GetOneComponent } from './components/task-management-center/get-one/get-one.component';
import { ListComponent } from './components/task-management-center/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './components/task-management-center/list/list-item/list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NonSpecifiePipe } from './pipes/non-specifie.pipe';
import { DeleteComponent } from './components/task-management-center/delete/delete.component';
import { SharedModule } from './shared/shared.module';
import { TerminateComponent } from './components/task-management-center/terminate/terminate.component';
import { FilterToolComponent } from './components/task-management-center/list/filter-tool/filter-tool.component';
import { SortingToolComponent } from './components/task-management-center/list/sorting-tool/sorting-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    AccueilComponent,
    HeaderComponent,
    NavComponent,
    NavItemComponent,
    TaskManagementCenterComponent,
    AddComponent,
    UpdateComponent,
    GetOneComponent,
    ListComponent,
    ListItemComponent,
    NonSpecifiePipe,
    DeleteComponent,
    TerminateComponent,
    FilterToolComponent,
    SortingToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
