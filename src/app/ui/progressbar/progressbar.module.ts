import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressbarRoutingModule } from './progressbar-routing.module';
import { ProgressbarComponent } from './progressbar.component';

@NgModule({
  imports: [
    CommonModule,
    ProgressbarRoutingModule
  ],
  declarations: [ProgressbarComponent]
})
export class ProgressbarModule { }
