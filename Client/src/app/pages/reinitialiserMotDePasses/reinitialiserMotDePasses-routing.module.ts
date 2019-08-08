import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ReinitialiserMotDePasses Routes Imports
import { ReinitialiserMotDePassesDetailComponent } from './reinitialiserMotDePasses-detail/reinitialiserMotDePasses-detail.component';
import { ReinitialiserMotDePassesListComponent } from './reinitialiserMotDePasses-list/reinitialiserMotDePasses-list.component';

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
