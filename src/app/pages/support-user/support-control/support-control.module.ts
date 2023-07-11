import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportControlPageRoutingModule } from './support-control-routing.module';

import { SupportControlPage } from './support-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportControlPageRoutingModule
  ],
  declarations: [SupportControlPage]
})
export class SupportControlPageModule {}
