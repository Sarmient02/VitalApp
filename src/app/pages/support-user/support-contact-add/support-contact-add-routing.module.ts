import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportContactAddPage } from './support-contact-add.page';

const routes: Routes = [
  {
    path: '',
    component: SupportContactAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportContactAddPageRoutingModule {}
