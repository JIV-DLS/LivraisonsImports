import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Employe Routes Imports
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { EmployeListComponent } from './employe-list/employe-list.component';

const routes: Routes = [
  {
    path: 'employes',
    children: [
      {
        path: '',
        component: EmployeListComponent
      },
      {
        path: ':id',
        component: EmployeDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployesRoutingModule { }
