import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainSynchronizePageRoutingModule } from './main-synchronize-routing.module';

import { MainSynchronizePage } from './main-synchronize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainSynchronizePageRoutingModule
  ],
  declarations: [MainSynchronizePage]
})
export class MainSynchronizePageModule {}
