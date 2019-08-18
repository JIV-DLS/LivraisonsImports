import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Societe Routes Imports
import { SocieteDetailComponent } from './societe-detail/societe-detail.component';
import { SocieteListComponent } from './societe-list/societe-list.component';
import { SocieteAddComponent } from '../societes/societe-add/societe-add.component';

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
  },
  {
    path: 'societesAdd',
    children: [
      {
        path: '',
        component: SocieteAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocietesRoutingModule { }
