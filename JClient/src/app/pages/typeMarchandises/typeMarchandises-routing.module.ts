import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// TypeMarchandise Routes Imports
import { TypeMarchandiseDetailComponent } from './typeMarchandise-detail/typeMarchandise-detail.component';
import { TypeMarchandiseListComponent } from './typeMarchandise-list/typeMarchandise-list.component';

const routes: Routes = [
  {
    path: 'typeMarchandises',
    children: [
      {
        path: '',
        component: TypeMarchandiseListComponent
      },
      {
        path: ':id',
        component: TypeMarchandiseDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeMarchandisesRoutingModule { }
