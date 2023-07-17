import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainAlertPage } from './main-alert.page';

const routes: Routes = [
  {
    path: '',
    component: MainAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainAlertPageRoutingModule {}
