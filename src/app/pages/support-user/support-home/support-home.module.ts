import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportHomePageRoutingModule } from './support-home-routing.module';

import { SupportHomePage } from './support-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportHomePageRoutingModule
  ],
  declarations: [SupportHomePage]
})
export class SupportHomePageModule {}
