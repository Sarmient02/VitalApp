import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportContactsPageRoutingModule } from './support-contacts-routing.module';

import { SupportContactsPage } from './support-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportContactsPageRoutingModule
  ],
  declarations: [SupportContactsPage]
})
export class SupportContactsPageModule {}
