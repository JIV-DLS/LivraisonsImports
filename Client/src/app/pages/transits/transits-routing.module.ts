import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Transit Routes Imports
import { TransitDetailComponent } from './transit-detail/transit-detail.component';
import { TransitListComponent } from './transit-list/transit-list.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransitsRoutingModule { }
