import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainAlertPageRoutingModule } from './main-alert-routing.module';

import { MainAlertPage } from './main-alert.page';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [MainAlertPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MainAlertPageRoutingModule,
        SharedModule
    ]
})
export class MainAlertPageModule {}
