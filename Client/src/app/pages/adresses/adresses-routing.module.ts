import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Builder Routes Imports
import { BuilderDetailComponent } from './adresse-detail/adresse-detail.component';
import { BuilderListComponent } from './adresse-list/adresse-list.component';

const routes: Routes = [
  {
    path: 'adresses',
    children: [
      {
        path: '',
        component: BuilderListComponent
      },
      {
        path: ':id',
        component: BuilderDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildersRoutingModule { }
