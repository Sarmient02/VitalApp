import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportPressureHistoryPageRoutingModule } from './support-pressure-history-routing.module';

import { SupportPressureHistoryPage } from './support-pressure-history.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportPressureHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportPressureHistoryPage]
})
export class SupportPressureHistoryPageModule {}
