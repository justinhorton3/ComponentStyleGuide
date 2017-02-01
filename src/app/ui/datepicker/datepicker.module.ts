import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    Ng2BootstrapModule.forRoot()

  ],
  declarations: [DatepickerComponent]
})
export class DatepickerModule { }
