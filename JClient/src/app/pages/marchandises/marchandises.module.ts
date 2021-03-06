import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarchandisesRoutingModule } from './marchandises-routing.module';
import { MarchandisesComponent } from './marchandises.component';
import { MarchandiseDetailComponent } from './marchandise-detail/marchandise-detail.component';
import { MarchandiseListComponent } from './marchandise-list/marchandise-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarchandiseAddComponent } from './marchandise-add/marchandise-add.component';

@NgModule({
  imports: [
    CommonModule,
    MarchandisesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MarchandisesComponent, MarchandiseDetailComponent, MarchandiseListComponent, MarchandiseAddComponent]
})
export class MarchandisesModule { }
