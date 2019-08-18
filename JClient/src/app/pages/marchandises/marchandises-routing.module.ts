import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Marchandise Routes Imports
import { MarchandiseDetailComponent } from './marchandise-detail/marchandise-detail.component';
import { MarchandiseListComponent } from './marchandise-list/marchandise-list.component';
import { MarchandiseAddComponent } from './marchandise-add/marchandise-add.component';

const routes: Routes = [
  {
    path: 'marchandises',
    children: [
      {
        path: '',
        component: MarchandiseListComponent
      },
      {
        path: ':id',
        component: MarchandiseDetailComponent
      }
    ]
  }
  ,
  {
    path: 'marchandisesAdd',
    children: [
      {
        path: '',
        component: MarchandiseAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarchandisesRoutingModule { }
