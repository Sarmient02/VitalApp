import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainConfigPage } from './main-config.page';

const routes: Routes = [
  {
    path: '',
    component: MainConfigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainConfigPageRoutingModule {}
