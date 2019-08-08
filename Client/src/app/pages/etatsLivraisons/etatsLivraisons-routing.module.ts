import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// EtatsLivraisons Routes Imports
import { EtatsLivraisonsDetailComponent } from './etatsLivraisons-detail/etatsLivraisons-detail.component';
import { EtatsLivraisonsListComponent } from './etatsLivraisons-list/etatsLivraisons-list.component';

const routes: Routes = [
  {
    path: 'etatsLivraisonss',
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
