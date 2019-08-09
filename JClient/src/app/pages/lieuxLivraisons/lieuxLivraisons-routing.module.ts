import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// LieuxLivraison Routes Imports
import { LieuxLivraisonDetailComponent } from './lieuxLivraison-detail/lieuxLivraison-detail.component';
import { LieuxLivraisonListComponent } from './lieuxLivraison-list/lieuxLivraison-list.component';

const routes: Routes = [
  {
    path: 'lieuxLivraisons',
    children: [
      {
        path: '',
        component: LieuxLivraisonListComponent
      },
      {
        path: ':id',
        component: LieuxLivraisonDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LieuxLivraisonsRoutingModule { }
