import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// EtatsLivraisons Routes Imports
import { EtatsLivraisonsDetailComponent } from './etatsLivraison-detail/etatsLivraison-detail.component';
import { EtatsLivraisonsListComponent } from './etatsLivraison-list/etatsLivraison-list.component';

const routes: Routes = [
  {
    path: 'etatsLivraisons',
    children: [
      {
        path: '',
        component: EtatsLivraisonsListComponent
      },
      {
        path: ':id',
        component: EtatsLivraisonsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatsLivraisonssRoutingModule { }
