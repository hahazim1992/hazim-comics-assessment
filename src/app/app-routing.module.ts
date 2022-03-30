import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component'

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'details/:id',
        component: DetailComponent
    }
    ],  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
