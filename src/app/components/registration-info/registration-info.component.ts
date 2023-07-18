import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registration-info',
  templateUrl: './registration-info.component.html',
  styleUrls: ['./registration-info.component.scss'],
})
export class RegistrationInfoComponent  implements OnInit {

  nameInput!: string;
  phoneInput!: string;
  passwordInput!: string;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  onNameInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.nameInput = inputElement.value;
  }

  onPhoneInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.phoneInput = inputElement.value;
  }

  onPasswordInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.passwordInput = inputElement.value;
  }

  clickedNext(): void{
    this.router.navigate(['registration-type-screen'],
    {queryParams: {name: this.nameInput, phone: this.phoneInput, password: this.passwordInput}})
  }
}
