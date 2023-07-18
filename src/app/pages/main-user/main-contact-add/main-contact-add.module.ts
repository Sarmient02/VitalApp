import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContactAddPageRoutingModule } from './main-contact-add-routing.module';

import { MainContactAddPage } from './main-contact-add.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainContactAddPageRoutingModule,
    SharedModule
  ],
  declarations: [MainContactAddPage]
})
export class MainContactAddPageModule {}
