import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationTypeScreenPage } from './registration-type-screen.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationTypeScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationTypeScreenPageRoutingModule {}
