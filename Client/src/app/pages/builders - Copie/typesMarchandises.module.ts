import { NgModule } from './node_modules/@angular/core';
import { Routes, RouterModule } from './node_modules/@angular/router';

// Builder Routes Imports
import { BuilderDetailComponent } from './typesMarchandise-detail/typesMarchandise.component';
import { BuilderListComponent } from './typesMarchandise-list/typesMarchandise.component';

const routes: Routes = [
  {
    path: 'builders',
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
