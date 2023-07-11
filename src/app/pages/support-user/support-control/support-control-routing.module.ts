import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportControlPage } from './support-control.page';

const routes: Routes = [
  {
    path: '',
    component: SupportControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportControlPageRoutingModule {}
