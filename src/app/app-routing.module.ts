import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateComponent } from './validate/validate.component';
import { SupplyDataComponent } from './supply-data/supply-data.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './validate/feed/feed.component';
import { InformComponent } from './inform/inform.component';

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
    path: 'validate-feed/:id',
    component: FeedComponent
  },
  {
    path: 'supply-data',
    component: SupplyDataComponent
  },
  {
    path: 'inform/:id',
    component: InformComponent
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
