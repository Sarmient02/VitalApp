import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationScreenPage } from './registration-screen.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationScreenPageRoutingModule {}
