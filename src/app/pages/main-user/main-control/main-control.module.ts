import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainControlPageRoutingModule } from './main-control-routing.module';

import { MainControlPage } from './main-control.page';

import { SharedModule } from 'src/app/shared/shared.module';

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainControlPageRoutingModule,
    SharedModule,
  ],
  declarations: [MainControlPage]
})
export class MainControlPageModule {}
