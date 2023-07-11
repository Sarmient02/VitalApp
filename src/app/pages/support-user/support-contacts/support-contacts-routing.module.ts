import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportContactsPage } from './support-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: SupportContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportContactsPageRoutingModule {}
