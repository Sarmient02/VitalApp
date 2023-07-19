import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportControlHistoryPageRoutingModule } from './support-control-history-routing.module';

import { SupportControlHistoryPage } from './support-control-history.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportControlHistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportControlHistoryPage]
})
export class SupportControlHistoryPageModule {}
