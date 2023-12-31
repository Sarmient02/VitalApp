import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportControlPageRoutingModule } from './support-control-routing.module';

import { SupportControlPage } from './support-control.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportControlPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportControlPage]
})
export class SupportControlPageModule {}
