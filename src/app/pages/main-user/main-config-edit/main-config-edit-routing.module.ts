import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainConfigEditPage } from './main-config-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MainConfigEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainConfigEditPageRoutingModule {}
