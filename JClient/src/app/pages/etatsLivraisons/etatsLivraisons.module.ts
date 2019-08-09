import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatsLivraisonssRoutingModule } from './etatsLivraisons-routing.module';
import { EtatsLivraisonssComponent } from './etatsLivraisons.component';
import { EtatsLivraisonsDetailComponent } from './etatsLivraison-detail/etatsLivraison-detail.component';
import { EtatsLivraisonsListComponent } from './etatsLivraison-list/etatsLivraison-list.component';

@NgModule({
  imports: [
    CommonModule,
    EtatsLivraisonssRoutingModule
  ],
  declarations: [EtatsLivraisonssComponent, EtatsLivraisonsDetailComponent, EtatsLivraisonsListComponent]
})
export class EtatsLivraisonssModule { }
