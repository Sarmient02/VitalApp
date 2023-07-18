import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPressureHistoryPageRoutingModule } from './main-pressure-history-routing.module';

import { MainPressureHistoryPage } from './main-pressure-history.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPressureHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [MainPressureHistoryPage]
})
export class MainPressureHistoryPageModule {}
