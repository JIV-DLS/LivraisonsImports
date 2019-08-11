import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Adresse Routes Imports
import { AdresseDetailComponent } from './adresse-detail/adresse-detail.component';
import { AdresseListComponent } from './adresse-list/adresse-list.component';

const routes: Routes = [
  {
    path: 'adresses',
    children: [
      {
        path: '',
        component: AdresseListComponent
      },
      {
        path: ':id',
        component: AdresseDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdressesRoutingModule { }
