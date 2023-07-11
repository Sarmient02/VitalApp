import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContactsPage } from './main-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: MainContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContactsPageRoutingModule {}
