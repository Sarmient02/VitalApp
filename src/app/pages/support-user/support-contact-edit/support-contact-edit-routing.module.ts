import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportContactEditPage } from './support-contact-edit.page';

const routes: Routes = [
  {
    path: '',
    component: SupportContactEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportContactEditPageRoutingModule {}
