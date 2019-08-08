import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildersRoutingModule } from './builders-routing.module';
import { BuildersComponent } from './builders.component';
import { BuilderDetailComponent } from './navire-detail/builder-detail.component';
import { BuilderListComponent } from './navire-list/builder-list.component';

@NgModule({
  imports: [
    CommonModule,
    BuildersRoutingModule
  ],
  declarations: [BuildersComponent, BuilderDetailComponent, BuilderListComponent]
})
export class BuildersModule { }
