import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportContactEditPageRoutingModule } from './support-contact-edit-routing.module';

import { SupportContactEditPage } from './support-contact-edit.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportContactEditPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportContactEditPage]
})
export class SupportContactEditPageModule {}
