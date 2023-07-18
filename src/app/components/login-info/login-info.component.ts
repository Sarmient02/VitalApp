import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/services/user/user';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.scss'],
})
export class LoginInfoComponent  implements OnInit {

  phoneInput: string = "";
  passwordInput: string = "";

  constructor(
    private userService: UserService
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
    return this.userService.checkLogin(this.phoneInput, this.passwordInput);
  }
}
