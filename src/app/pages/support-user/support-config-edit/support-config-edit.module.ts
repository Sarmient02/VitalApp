import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportConfigEditPageRoutingModule } from './support-config-edit-routing.module';

import { SupportConfigEditPage } from './support-config-edit.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportConfigEditPageRoutingModule,
    SharedModule
  ],
  declarations: [SupportConfigEditPage]
})
export class SupportConfigEditPageModule {}
