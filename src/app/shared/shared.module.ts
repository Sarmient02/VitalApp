import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { AlertButtonComponent } from '../components/alert-button/alert-button.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertButtonComponent,
    ContactListComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AlertButtonComponent,
    ContactListComponent
  ]
})
export class SharedModule { }
