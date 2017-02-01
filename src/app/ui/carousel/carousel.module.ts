import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselRoutingModule
  ],
  declarations: [CarouselComponent]
})
export class CarouselModule { }
