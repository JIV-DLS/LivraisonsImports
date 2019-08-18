import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocietesRoutingModule } from './societes-routing.module';
import { SocietesComponent } from './societes.component';
import { SocieteDetailComponent } from './societe-detail/societe-detail.component';
import { SocieteListComponent } from './societe-list/societe-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocieteAddComponent } from './societe-add/societe-add.component';

@NgModule({
  imports: [
    CommonModule,
    SocietesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SocietesComponent, SocieteDetailComponent, SocieteListComponent, SocieteAddComponent]
})
export class SocietesModule { }
