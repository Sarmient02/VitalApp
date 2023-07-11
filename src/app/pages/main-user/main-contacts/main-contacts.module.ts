import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainContactsPageRoutingModule } from './main-contacts-routing.module';

import { MainContactsPage } from './main-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainContactsPageRoutingModule
  ],
  declarations: [MainContactsPage]
})
export class MainContactsPageModule {}
