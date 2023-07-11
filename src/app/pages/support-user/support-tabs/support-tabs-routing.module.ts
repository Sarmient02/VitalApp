import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportTabsPage } from './support-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: SupportTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportTabsPageRoutingModule {}
