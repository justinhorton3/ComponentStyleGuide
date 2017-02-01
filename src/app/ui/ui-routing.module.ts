import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UiComponent } from './ui.component';


const routes: Routes = [
  { 
    path: '', 
    component: UiComponent,
    children: [
      { path: 'accordion',    loadChildren: 'app/ui/accordion/accordion.module#AccordionModule' },
      { path: 'alerts',       loadChildren: 'app/ui/alerts/alerts.module#AlertsModule' },
      { path: 'buttons',      loadChildren: 'app/ui/buttons/buttons.module#ButtonsModule' },
      { path: 'carousel',     loadChildren: 'app/ui/carousel/carousel.module#CarouselModule' },
      { path: 'datepicker',   loadChildren: 'app/ui/datepicker/datepicker.module#DatepickerModule' },
      { path: 'dropdowns',    loadChildren: 'app/ui/dropdowns/dropdowns.module#DropdownsModule' },
      { path: 'modals',       loadChildren: 'app/ui/modals/modals.module#ModalsModule' },
      { path: 'pagination',   loadChildren: 'app/ui/pagination/pagination.module#PaginationModule' },
      { path: 'progressbar',  loadChildren: 'app/ui/progressbar/progressbar.module#ProgressbarModule' },
      { path: 'tooltip',      loadChildren: 'app/ui/tooltip/tooltip.module#TooltipModule' }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UiRoutingModule { }
