import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// EtatsLivraisons Routes Imports
import { EtatsLivraisonDetailComponent } from './etatsLivraison-detail/etatsLivraison-detail.component';
import { EtatsLivraisonListComponent } from './etatsLivraison-list/etatsLivraison-list.component';
import { EtatsLivraisonAddComponent } from './etats-livraison-add/etats-livraison-add.component';

const routes: Routes = [
  {
    path: 'etatsLivraisons',
    children: [
      {
        path: '',
        component: EtatsLivraisonListComponent
      },
      {
        path: ':id',
        component: EtatsLivraisonDetailComponent
      }
    ]
  },
  {
    path: 'etatsLivraisonsAdd',
    children: [
      {
        path: '',
        component: EtatsLivraisonAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtatsLivraisonssRoutingModule { }
