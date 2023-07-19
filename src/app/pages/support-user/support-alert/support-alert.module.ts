import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportAlertPageRoutingModule } from './support-alert-routing.module';

import { SupportAlertPage } from './support-alert.page';

import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportAlertPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportAlertPage]
})
export class SupportAlertPageModule {}
