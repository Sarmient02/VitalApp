import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContactEditPage } from './main-contact-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MainContactEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContactEditPageRoutingModule {}
