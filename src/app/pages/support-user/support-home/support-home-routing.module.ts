import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportHomePage } from './support-home.page';

const routes: Routes = [
  {
    path: '',
    component: SupportHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportHomePageRoutingModule {}
