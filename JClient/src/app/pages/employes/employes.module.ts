import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { EmployesComponent } from './employes.component';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeAddComponent } from './employe-add/employe-add.component';

@NgModule({
  imports: [
    CommonModule,
    EmployesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EmployesComponent, EmployeDetailComponent, EmployeListComponent, EmployeAddComponent]
})
export class EmployesModule { }
