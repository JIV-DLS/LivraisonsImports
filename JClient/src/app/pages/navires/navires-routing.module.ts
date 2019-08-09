import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// navire Routes Imports
import { NavireDetailComponent } from './navire-detail/navire-detail.component';
import { NavireListComponent } from './navire-list/navire-list.component';

const routes: Routes = [
  {
    path: 'navires',
    children: [
      {
        path: '',
        component: NavireListComponent
      },
      {
        path: ':id',
        component: NavireDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaviresRoutingModule { }
