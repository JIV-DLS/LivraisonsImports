import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressesRoutingModule } from './adresses-routing.module';
import { AdressesComponent } from './adresses.component';
import { AdresseDetailComponent } from './adresse-detail/adresse-detail.component';
import { AdresseListComponent } from './adresse-list/adresse-list.component';
import { AdresseAddComponent } from './adresse-add/adresse-add.component';

@NgModule({
  imports: [
    CommonModule,
    AdressesRoutingModule
  ],
  declarations: [AdressesComponent, AdresseDetailComponent, AdresseListComponent, AdresseAddComponent]
})
export class AdressesModule { }
