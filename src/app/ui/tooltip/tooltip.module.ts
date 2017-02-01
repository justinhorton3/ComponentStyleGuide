import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipRoutingModule
  ],
  declarations: [TooltipComponent]
})
export class TooltipModule { }
