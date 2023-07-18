import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSynchronizePageRoutingModule } from './main-synchronize-routing.module';

import { MainSynchronizePage } from './main-synchronize.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainSynchronizePageRoutingModule,
    SharedModule
  ],
  declarations: [MainSynchronizePage]
})
export class MainSynchronizePageModule {}
