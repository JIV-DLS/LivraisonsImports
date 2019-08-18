import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtatsLivraisonssRoutingModule } from './etatsLivraisons-routing.module';
import { EtatsLivraisonssComponent } from './etatsLivraisons.component';
import { EtatsLivraisonDetailComponent } from './etatsLivraison-detail/etatsLivraison-detail.component';
import { EtatsLivraisonListComponent } from './etatsLivraison-list/etatsLivraison-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtatsLivraisonAddComponent } from './etats-livraison-add/etats-livraison-add.component';
import { LivraisonsModule } from '../livraisons/livraisons.module';

@NgModule({
  imports: [
    CommonModule,
    EtatsLivraisonssRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LivraisonsModule
  ],
  // tslint:disable-next-line: max-line-length
  declarations: [
    EtatsLivraisonssComponent,
    EtatsLivraisonDetailComponent,
    EtatsLivraisonListComponent,
    EtatsLivraisonAddComponent]
})
export class EtatsLivraisonssModule { }
