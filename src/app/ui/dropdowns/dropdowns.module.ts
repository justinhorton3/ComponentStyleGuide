import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsRoutingModule } from './dropdowns-routing.module';
import { DropdownsComponent } from './dropdowns.component';

@NgModule({
  imports: [
    CommonModule,
    DropdownsRoutingModule
  ],
  declarations: [DropdownsComponent]
})
export class DropdownsModule { }
