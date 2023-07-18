import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPressureHistoryPage } from './main-pressure-history.page';

const routes: Routes = [
  {
    path: '',
    component: MainPressureHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPressureHistoryPageRoutingModule {}
