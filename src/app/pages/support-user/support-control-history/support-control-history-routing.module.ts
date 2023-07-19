import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportControlHistoryPage } from './support-control-history.page';

const routes: Routes = [
  {
    path: '',
    component: SupportControlHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportControlHistoryPageRoutingModule {}
