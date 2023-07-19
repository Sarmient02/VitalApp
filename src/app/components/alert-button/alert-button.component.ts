import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss'],
})
export class AlertButtonComponent  implements OnInit {

  activeUser!: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activeUser = this.userService.getActiveUser();
  }

  goToAlert(){
    if(this.activeUser.userType == "main"){
      this.router.navigate(['main-tabs/home/alert']);
    } else {
      this.router.navigate(['support-tabs/home/alert']);
    }
  }

}
