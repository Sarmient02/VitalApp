import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainConfigPageRoutingModule } from './main-config-routing.module';

import { MainConfigPage } from './main-config.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainConfigPageRoutingModule,
    SharedModule
  ],
  declarations: [MainConfigPage]
})
export class MainConfigPageModule {}
