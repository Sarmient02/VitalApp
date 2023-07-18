import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { AlertButtonComponent } from '../components/alert-button/alert-button.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { MonitorComponent } from '../components/monitor/monitor.component';
import { ContactInfoComponent } from '../components/contact-info/contact-info.component';
import { AddPressureComponent } from '../components/add-pressure/add-pressure.component';
import { MapComponent } from '../components/map/map.component';
import { AlertMonitorComponent } from '../components/alert-monitor/alert-monitor.component';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';
import { LoginInfoComponent } from '../components/login-info/login-info.component';
import { RegistrationInfoComponent } from '../components/registration-info/registration-info.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertButtonComponent,
    ContactListComponent,
    MonitorComponent,
    ContactInfoComponent,
    AddPressureComponent,
    MapComponent,
    AlertMonitorComponent,
    AlertModalComponent,
    LoginInfoComponent,
    RegistrationInfoComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    NgChartsModule
  ],
  exports: [
    HeaderComponent,
    AlertButtonComponent,
    ContactListComponent,
    MonitorComponent,
    ContactInfoComponent,
    AddPressureComponent,
    MapComponent,
    AlertMonitorComponent,
    AlertModalComponent,
    LoginInfoComponent,
    RegistrationInfoComponent
  ],
  providers: [DatePipe]
})
export class SharedModule { }
