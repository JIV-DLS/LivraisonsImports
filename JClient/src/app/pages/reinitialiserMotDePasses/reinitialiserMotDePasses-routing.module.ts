import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ReinitialiserMotDePasses Routes Imports
import { ReinitialiserMotDePassesDetailComponent } from './reinitialiserMotDePasse-detail/reinitialiserMotDePasse-detail.component';
import { ReinitialiserMotDePassesListComponent } from './reinitialiserMotDePasse-list/reinitialiserMotDePasse-list.component';

const routes: Routes = [
  {
    path: 'reinitialiserMotDePassess',
    children: [
      {
        path: '',
        component: ReinitialiserMotDePassesListComponent
      },
      {
        path: ':id',
        component: ReinitialiserMotDePassesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReinitialiserMotDePassessRoutingModule { }
