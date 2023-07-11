import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainControlPage } from './main-control.page';

const routes: Routes = [
  {
    path: '',
    component: MainControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainControlPageRoutingModule {}
