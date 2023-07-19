import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportAlertPage } from './support-alert.page';

const routes: Routes = [
  {
    path: '',
    component: SupportAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportAlertPageRoutingModule {}
