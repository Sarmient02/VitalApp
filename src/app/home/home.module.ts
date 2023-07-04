import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { AlertButtonComponent } from '../components/alert-button/alert-button.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavigationComponent } from '../components/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage, 
    AlertButtonComponent,
    HeaderComponent,
    NavigationComponent
  ]
})
export class HomePageModule {}
