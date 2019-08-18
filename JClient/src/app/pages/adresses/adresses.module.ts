import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressesRoutingModule } from './adresses-routing.module';
import { AdressesComponent } from './adresses.component';
import { AdresseDetailComponent } from './adresse-detail/adresse-detail.component';
import { AdresseListComponent } from './adresse-list/adresse-list.component';
import { AdresseAddComponent } from './adresse-add/adresse-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocieteAddComponent } from './societe-add/societe-add.component';
import { EtatsLivraisonListComponent } from '../etatsLivraisons/etatsLivraison-list/etatsLivraison-list.component';
import { EtatsLivraisons } from '../etatsLivraisons/etatsLivraison';
import { EtatsLivraisonssModule } from '../etatsLivraisons/etatsLivraisons.module';
import { EtatsLivraisonssComponent } from '../etatsLivraisons/etatsLivraisons.component';

@NgModule({
  imports: [
    CommonModule,
    AdressesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EtatsLivraisonssModule
  ],
  declarations: [ /*EtatsLivraisonssComponent,*/ AdressesComponent, AdresseDetailComponent, AdresseListComponent, AdresseAddComponent, SocieteAddComponent]
})
export class AdressesModule { }
