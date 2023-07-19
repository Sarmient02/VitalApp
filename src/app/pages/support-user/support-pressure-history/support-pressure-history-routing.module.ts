import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportPressureHistoryPage } from './support-pressure-history.page';

const routes: Routes = [
  {
    path: '',
    component: SupportPressureHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportPressureHistoryPageRoutingModule {}
