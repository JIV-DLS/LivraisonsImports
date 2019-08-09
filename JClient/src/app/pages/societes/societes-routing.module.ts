import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Societe Routes Imports
import { SocieteDetailComponent } from './societe-detail/societe-detail.component';
import { SocieteListComponent } from './societe-list/societe-list.component';

const routes: Routes = [
  {
    path: 'societes',
    children: [
      {
        path: '',
        component: SocieteListComponent
      },
      {
        path: ':id',
        component: SocieteDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocietesRoutingModule { }
