import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaviresRoutingModule } from './navires-routing.module';
import { NaviresComponent } from './navires.component';
import { NavireDetailComponent } from './navire-detail/navire-detail.component';
import { NavireListComponent } from './navire-list/navire-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavireAddComponent } from './navire-add/navire-add.component';

@NgModule({
  imports: [
    CommonModule,
    NaviresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [NaviresComponent, NavireDetailComponent, NavireListComponent, NavireAddComponent]
})
export class NaviresModule { }
