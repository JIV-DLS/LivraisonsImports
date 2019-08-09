import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReinitialiserMotDePassessRoutingModule } from './reinitialiserMotDePasses-routing.module';
import { ReinitialiserMotDePassessComponent } from './reinitialiserMotDePasses.component';
import { ReinitialiserMotDePassesDetailComponent } from './reinitialiserMotDePasse-detail/reinitialiserMotDePasse-detail.component';
import { ReinitialiserMotDePassesListComponent } from './reinitialiserMotDePasse-list/reinitialiserMotDePasse-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReinitialiserMotDePassessRoutingModule
  ],
  declarations: [ReinitialiserMotDePassessComponent, ReinitialiserMotDePassesDetailComponent, ReinitialiserMotDePassesListComponent]
})
export class ReinitialiserMotDePassessModule { }
