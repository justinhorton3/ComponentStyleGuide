import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsRoutingModule } from './modals-routing.module';
import { ModalsComponent } from './modals.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ModalsRoutingModule,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [ModalsComponent]
})
export class ModalsModule { }
