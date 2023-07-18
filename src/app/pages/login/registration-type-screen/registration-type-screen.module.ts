import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationTypeScreenPageRoutingModule } from './registration-type-screen-routing.module';

import { RegistrationTypeScreenPage } from './registration-type-screen.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationTypeScreenPageRoutingModule,
    SharedModule
  ],
  declarations: [RegistrationTypeScreenPage]
})
export class RegistrationTypeScreenPageModule {}
