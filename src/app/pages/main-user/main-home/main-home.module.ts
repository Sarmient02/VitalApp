import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainHomePageRoutingModule } from './main-home-routing.module';

import { MainHomePage } from './main-home.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainHomePageRoutingModule,
    SharedModule
  ],
  declarations: [MainHomePage]
})
export class MainHomePageModule {}
