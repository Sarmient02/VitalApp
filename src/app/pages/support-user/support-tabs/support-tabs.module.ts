import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportTabsPageRoutingModule } from './support-tabs-routing.module';

import { SupportTabsPage } from './support-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportTabsPageRoutingModule
  ],
  declarations: [SupportTabsPage]
})
export class SupportTabsPageModule {}
