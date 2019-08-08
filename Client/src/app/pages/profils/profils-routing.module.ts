import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Profil Routes Imports
import { ProfilDetailComponent } from './profil-detail/profil-detail.component';
import { ProfilListComponent } from './profil-list/profil-list.component';

const routes: Routes = [
  {
    path: 'profils',
    children: [
      {
        path: '',
        component: ProfilListComponent
      },
      {
        path: ':id',
        component: ProfilDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilsRoutingModule { }
