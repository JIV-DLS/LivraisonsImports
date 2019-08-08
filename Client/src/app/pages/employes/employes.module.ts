import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { EmployesComponent } from './employes.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { EmployeListComponent } from './employe-list/employe-list.component';

@NgModule({
  imports: [
    CommonModule,
    EmployesRoutingModule
  ],
  declarations: [EmployesComponent, EmployeDetailComponent, EmployeListComponent]
})
export class EmployesModule { }
