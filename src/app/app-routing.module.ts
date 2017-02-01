import { NgModule, ModuleWithProviders  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';

const routes: Routes = [

   { path: 'about', component: AboutComponent },
   { path: 'ui', loadChildren: 'app/ui/ui.module#UiModule' },

   { path: '', redirectTo: 'about', pathMatch: 'full' },
   { path: '**', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
