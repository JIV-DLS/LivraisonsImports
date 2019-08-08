import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Livraison Routes Imports
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';

const routes: Routes = [
  {
    path: 'livraisons',
    children: [
      {
        path: '',
        component: LivraisonListComponent
      },
      {
        path: ':id',
        component: LivraisonDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonsRoutingModule { }
