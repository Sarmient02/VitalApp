import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContactAddPage } from './main-contact-add.page';

const routes: Routes = [
  {
    path: '',
    component: MainContactAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContactAddPageRoutingModule {}
