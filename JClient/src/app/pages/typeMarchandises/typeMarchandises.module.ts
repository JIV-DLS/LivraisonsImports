import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeMarchandisesRoutingModule } from './typeMarchandises-routing.module';
import { TypeMarchandisesComponent } from './typeMarchandises.component';
import { TypeMarchandiseDetailComponent } from './typeMarchandise-detail/typeMarchandise-detail.component';
import { TypeMarchandiseListComponent } from './typeMarchandise-list/typeMarchandise-list.component';

@NgModule({
  imports: [
    CommonModule,
    TypeMarchandisesRoutingModule
  ],
  declarations: [TypeMarchandisesComponent, TypeMarchandiseDetailComponent, TypeMarchandiseListComponent]
})
export class TypeMarchandisesModule { }
