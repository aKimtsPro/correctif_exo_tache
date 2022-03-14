import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddComponent } from './components/task-management-center/add/add.component';
import { Page404Component } from './components/page404/page404.component';
import { GetOneComponent } from './components/task-management-center/get-one/get-one.component';
import { NoActionComponent } from './components/task-management-center/no-action/no-action.component';
import { TaskManagementCenterComponent } from './components/task-management-center/task-management-center.component';
import { UpdateComponent } from './components/task-management-center/update/update.component';
import { DeleteComponent } from './components/task-management-center/delete/delete.component';
import { TerminatedGuard } from './guards/terminated.guard';
import { TerminateComponent } from './components/task-management-center/terminate/terminate.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil'},
  { path: 'accueil', component: AccueilComponent },
  { path: '404', component: Page404Component },
  { path:'tache', component: TaskManagementCenterComponent, children: [
    { path: '', component: NoActionComponent, pathMatch: 'full' },
    { path: 'add', component: AddComponent },
    { path: 'update/:id', component: UpdateComponent, canActivate: [TerminatedGuard] },
    { path: 'terminate/:id', component: TerminateComponent, canActivate: [TerminatedGuard] },
    { path: 'delete/:id', component: DeleteComponent },
    { path: ':id', component: GetOneComponent },
  ]},
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
