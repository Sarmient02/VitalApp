import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistrationInfoComponent } from 'src/app/components/registration-info/registration-info.component';

@Component({
  selector: 'app-registration-screen',
  templateUrl: './registration-screen.page.html',
  styleUrls: ['./registration-screen.page.scss'],
})
export class RegistrationScreenPage implements OnInit {

  @ViewChild(RegistrationInfoComponent) 
  registrationInfo!: RegistrationInfoComponent;

  constructor(
  ) { }

  // Once again, no security due to time reasons!
  ngOnInit() {
  }

  clickedNext(){
    this.registrationInfo.clickedNext();
  }

}
