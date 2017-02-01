import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginationComponent } from './pagination.component';

const routes: Routes = [
   { path: '', component: PaginationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PaginationRoutingModule { }
