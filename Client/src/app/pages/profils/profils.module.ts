import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilsRoutingModule } from './profils-routing.module';
import { ProfilsComponent } from './profils.component';
import { ProfilDetailComponent } from './profil-detail/profil-detail.component';
import { ProfilListComponent } from './profil-list/profil-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProfilsRoutingModule
  ],
  declarations: [ProfilsComponent, ProfilDetailComponent, ProfilListComponent]
})
export class ProfilsModule { }
