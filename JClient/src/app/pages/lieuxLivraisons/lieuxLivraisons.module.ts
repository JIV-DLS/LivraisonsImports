import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LieuxLivraisonsRoutingModule } from './lieuxLivraisons-routing.module';
import { LieuxLivraisonsComponent } from './lieuxLivraisons.component';
import { LieuxLivraisonDetailComponent } from './lieuxLivraison-detail/lieuxLivraison-detail.component';
import { LieuxLivraisonListComponent } from './lieuxLivraison-list/lieuxLivraison-list.component';
import { LivraisonsModule } from '../livraisons/livraisons.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LieuxLivraisonAddComponent } from './lieux-livraison-add/lieux-livraison-add.component';

@NgModule({
  imports: [
    CommonModule,
    LieuxLivraisonsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LieuxLivraisonsComponent, LieuxLivraisonDetailComponent, LieuxLivraisonListComponent, LieuxLivraisonAddComponent]
})
export class LieuxLivraisonsModule { }
