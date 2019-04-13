import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateComponent } from './validate/validate.component';
import { SupplyDataComponent } from './supply-data/supply-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'validate-data/:id',
    component: ValidateComponent
  },
  {
    path: 'supply-data',
    component: SupplyDataComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
