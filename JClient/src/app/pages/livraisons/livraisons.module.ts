import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivraisonsRoutingModule } from './livraisons-routing.module';
import { LivraisonsComponent } from './livraisons.component';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';

@NgModule({
  imports: [
    CommonModule,
    LivraisonsRoutingModule
  ],
  declarations: [LivraisonsComponent, LivraisonDetailComponent, LivraisonListComponent]
})
export class LivraisonsModule { }
