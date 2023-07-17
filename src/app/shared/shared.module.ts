import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { AlertButtonComponent } from '../components/alert-button/alert-button.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { MonitorComponent } from '../components/monitor/monitor.component';
import { ContactInfoComponent } from '../components/contact-info/contact-info.component';
import { AddPressureComponent } from '../components/add-pressure/add-pressure.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertButtonComponent,
    ContactListComponent,
    MonitorComponent,
    ContactInfoComponent,
    AddPressureComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AlertButtonComponent,
    ContactListComponent,
    MonitorComponent,
    ContactInfoComponent,
    AddPressureComponent
  ]
})
export class SharedModule { }
