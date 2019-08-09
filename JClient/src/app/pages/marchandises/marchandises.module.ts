import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarchandisesRoutingModule } from './marchandises-routing.module';
import { MarchandisesComponent } from './marchandises.component';
import { MarchandiseDetailComponent } from './marchandise-detail/marchandise-detail.component';
import { MarchandiseListComponent } from './marchandise-list/marchandise-list.component';

@NgModule({
  imports: [
    CommonModule,
    MarchandisesRoutingModule
  ],
  declarations: [MarchandisesComponent, MarchandiseDetailComponent, MarchandiseListComponent]
})
export class MarchandisesModule { }
