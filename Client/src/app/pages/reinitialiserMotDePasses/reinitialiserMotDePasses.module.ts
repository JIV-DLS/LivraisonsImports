import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReinitialiserMotDePassessRoutingModule } from './reinitialiserMotDePassess-routing.module';
import { ReinitialiserMotDePassessComponent } from './reinitialiserMotDePassess.component';
import { ReinitialiserMotDePassesDetailComponent } from './reinitialiserMotDePasses-detail/reinitialiserMotDePasses-detail.component';
import { ReinitialiserMotDePassesListComponent } from './reinitialiserMotDePasses-list/reinitialiserMotDePasses-list.component';

@NgModule({
  imports: [
    CommonModule,
    ReinitialiserMotDePassessRoutingModule
  ],
  declarations: [ReinitialiserMotDePassessComponent, ReinitialiserMotDePassesDetailComponent, ReinitialiserMotDePassesListComponent]
})
export class ReinitialiserMotDePassessModule { }
