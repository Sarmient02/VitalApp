import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportConfigPage } from './support-config.page';

const routes: Routes = [
  {
    path: '',
    component: SupportConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportConfigPageRoutingModule {}
