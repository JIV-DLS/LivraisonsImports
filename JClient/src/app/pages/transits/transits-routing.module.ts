import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Transit Routes Imports
import { TransitDetailComponent } from './transit-detail/transit-detail.component';
import { TransitListComponent } from './transit-list/transit-list.component';
import { TransitAddComponent } from './transit-add/transit-add.component';

const routes: Routes = [
  {
    path: 'transits',
    children: [
      {
        path: '',
        component: TransitListComponent
      },
      {
        path: ':id',
        component: TransitDetailComponent
      }
    ]
  },
  {
    path: 'transitsAdd',
    children: [
      {
        path: '',
        component: TransitAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitsRoutingModule { }
