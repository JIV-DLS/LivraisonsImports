import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LieuxLivraisonsRoutingModule } from './lieuxLivraisons-routing.module';
import { LieuxLivraisonsComponent } from './lieuxLivraisons.component';
import { LieuxLivraisonDetailComponent } from './lieuxLivraison-detail/lieuxLivraison-detail.component';
import { LieuxLivraisonListComponent } from './lieuxLivraison-list/lieuxLivraison-list.component';

@NgModule({
  imports: [
    CommonModule,
    LieuxLivraisonsRoutingModule
  ],
  declarations: [LieuxLivraisonsComponent, LieuxLivraisonDetailComponent, LieuxLivraisonListComponent]
})
export class LieuxLivraisonsModule { }
