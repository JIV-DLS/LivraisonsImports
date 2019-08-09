import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitsRoutingModule } from './transits-routing.module';
import { TransitsComponent } from './transits.component';
import { TransitDetailComponent } from './transit-detail/transit-detail.component';
import { TransitListComponent } from './transit-list/transit-list.component';

@NgModule({
  imports: [
    CommonModule,
    TransitsRoutingModule
  ],
  declarations: [TransitsComponent, TransitDetailComponent, TransitListComponent]
})
export class TransitsModule { }
