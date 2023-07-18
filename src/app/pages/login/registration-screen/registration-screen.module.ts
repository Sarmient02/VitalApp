import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationScreenPageRoutingModule } from './registration-screen-routing.module';

import { RegistrationScreenPage } from './registration-screen.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationScreenPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistrationScreenPage]
})
export class RegistrationScreenPageModule {}
