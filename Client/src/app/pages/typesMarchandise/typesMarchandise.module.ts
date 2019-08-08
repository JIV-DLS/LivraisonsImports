import { NgModule } from './node_modules/@angular/core';
import { CommonModule } from './node_modules/@angular/common';

import { BuildersRoutingModule } from './builders-routing.module';
import { BuildersComponent } from './typesMarchandise.component';
import { BuilderDetailComponent } from './builder-detail/builder-detail.component';
import { BuilderListComponent } from './builder-list/builder-list.component';

@NgModule({
  imports: [
    CommonModule,
    BuildersRoutingModule
  ],
  declarations: [BuildersComponent, BuilderDetailComponent, BuilderListComponent]
})
export class BuildersModule { }
