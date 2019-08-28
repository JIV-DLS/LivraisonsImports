import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivraisonsRoutingModule } from './livraisons-routing.module';
import { LivraisonsComponent } from './livraisons.component';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LivraisonAddComponent } from './livraison-add/livraison-add.component';
import { BdcComponent } from './bdc/bdc.component';
import { BdcfComponent } from './bdcf/bdcf.component';

@NgModule({
  imports: [
    CommonModule,
    LivraisonsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LivraisonsComponent, LivraisonDetailComponent, LivraisonListComponent, LivraisonAddComponent, BdcComponent, BdcfComponent]
})
export class LivraisonsModule { }
