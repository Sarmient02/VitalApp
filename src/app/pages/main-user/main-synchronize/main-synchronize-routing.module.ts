import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainSynchronizePage } from './main-synchronize.page';

const routes: Routes = [
  {
    path: '',
    component: MainSynchronizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainSynchronizePageRoutingModule {}
