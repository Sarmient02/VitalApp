import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainConfigEditPageRoutingModule } from './main-config-edit-routing.module';

import { MainConfigEditPage } from './main-config-edit.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainConfigEditPageRoutingModule,
    SharedModule
  ],
  declarations: [MainConfigEditPage]
})
export class MainConfigEditPageModule {}
