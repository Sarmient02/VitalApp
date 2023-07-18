import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { User } from 'src/app/services/login/user';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent  implements OnInit {

  phoneInput: string = "";
  passwordInput: string = "";

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {}

  onPhoneInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.phoneInput = inputElement.value;
  }

  onPasswordInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.passwordInput = inputElement.value;
  }


  loginUser(): boolean{
    return this.loginService.checkLogin(this.phoneInput, this.passwordInput);
  }
}
