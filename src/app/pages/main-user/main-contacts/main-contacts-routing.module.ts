import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContactsPage } from './main-contacts.page';
import { MainContactAddPage } from '../main-contact-add/main-contact-add.page';

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
