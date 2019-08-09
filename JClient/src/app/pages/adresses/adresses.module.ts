import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildersRoutingModule } from './adresses-routing.module';
import { BuildersComponent } from './adresses.component';
import { BuilderDetailComponent } from './adresse-detail/adresse-detail.component';
import { BuilderListComponent } from './adresse-list/adresse-list.component';

@NgModule({
  imports: [
    CommonModule,
    BuildersRoutingModule
  ],
  declarations: [BuildersComponent, BuilderDetailComponent, BuilderListComponent]
})
export class BuildersModule { }
