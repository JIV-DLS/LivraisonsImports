import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitsRoutingModule } from './transits-routing.module';
import { TransitsComponent } from './transits.component';
import { TransitDetailComponent } from './transit-detail/transit-detail.component';
import { TransitListComponent } from './transit-list/transit-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TransitAddComponent } from './transit-add/transit-add.component';

@NgModule({
  imports: [
    CommonModule,
    TransitsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TransitsComponent, TransitDetailComponent, TransitListComponent, TransitAddComponent]
})
export class TransitsModule { }
