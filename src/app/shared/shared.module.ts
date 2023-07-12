import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { AlertButtonComponent } from '../components/alert-button/alert-button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertButtonComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AlertButtonComponent
  ]
})
export class SharedModule { }
