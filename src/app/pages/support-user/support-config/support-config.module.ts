import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportConfigPageRoutingModule } from './support-config-routing.module';

import { SupportConfigPage } from './support-config.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportConfigPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportConfigPage]
})
export class SupportConfigPageModule {}
