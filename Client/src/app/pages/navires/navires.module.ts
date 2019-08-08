import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaviresRoutingModule } from './navires-routing.module';
import { NaviresComponent } from './navires.component';
import { NavireDetailComponent } from './navire-detail/navire-detail.component';
import { NavireListComponent } from './navire-list/navire-list.component';

@NgModule({
  imports: [
    CommonModule,
    NaviresRoutingModule
  ],
  declarations: [NaviresComponent, NavireDetailComponent, NavireListComponent]
})
export class NaviresModule { }
