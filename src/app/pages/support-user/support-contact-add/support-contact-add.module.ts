import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportContactAddPageRoutingModule } from './support-contact-add-routing.module';

import { SupportContactAddPage } from './support-contact-add.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportContactAddPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportContactAddPage]
})
export class SupportContactAddPageModule {}
