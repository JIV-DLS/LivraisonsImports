import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocietesRoutingModule } from './societes-routing.module';
import { SocietesComponent } from './societes.component';
import { SocieteDetailComponent } from './societe-detail/societe-detail.component';
import { SocieteListComponent } from './societe-list/societe-list.component';

@NgModule({
  imports: [
    CommonModule,
    SocietesRoutingModule
  ],
  declarations: [SocietesComponent, SocieteDetailComponent, SocieteListComponent]
})
export class SocietesModule { }
