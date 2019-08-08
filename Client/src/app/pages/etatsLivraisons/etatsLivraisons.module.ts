import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatsLivraisonssRoutingModule } from './etatsLivraisonss-routing.module';
import { EtatsLivraisonssComponent } from './etatsLivraisonss.component';
import { EtatsLivraisonsDetailComponent } from './etatsLivraisons-detail/etatsLivraisons-detail.component';
import { EtatsLivraisonsListComponent } from './etatsLivraisons-list/etatsLivraisons-list.component';

@NgModule({
  imports: [
    CommonModule,
    EtatsLivraisonssRoutingModule
  ],
  declarations: [EtatsLivraisonssComponent, EtatsLivraisonsDetailComponent, EtatsLivraisonsListComponent]
})
export class EtatsLivraisonssModule { }
