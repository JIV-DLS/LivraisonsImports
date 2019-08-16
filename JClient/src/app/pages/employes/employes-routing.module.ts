import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Employe Routes Imports
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeAddComponent } from './employe-add/employe-add.component';

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
  },
  {
    path: 'employesAdd',
    children: [
      {
        path: '',
        component: EmployeAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployesRoutingModule { }
