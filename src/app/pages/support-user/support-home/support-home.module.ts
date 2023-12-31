import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportHomePageRoutingModule } from './support-home-routing.module';

import { SupportHomePage } from './support-home.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportHomePageRoutingModule,
    SharedModule
  ],
  declarations: [SupportHomePage]
})
export class SupportHomePageModule {}
