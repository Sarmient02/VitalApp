import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportConfigEditPage } from './support-config-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SupportConfigEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportConfigEditPageRoutingModule {}
