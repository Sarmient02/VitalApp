import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContactEditPageRoutingModule } from './main-contact-edit-routing.module';

import { MainContactEditPage } from './main-contact-edit.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainContactEditPageRoutingModule,
    SharedModule
  ],
  declarations: [MainContactEditPage]
})
export class MainContactEditPageModule {}
