import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-config-info',
  templateUrl: './config-info.component.html',
  styleUrls: ['./config-info.component.scss'],
})
export class ConfigInfoComponent  implements OnInit {

  activeUser!: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeUser = this.userService.getActiveUser()
  }

  logoutUser(){
    this.router.navigate(['start-screen'])
  }

  clickedEditProfile(){
    this.router.navigate(['main-tabs/config/edit'])
  }
}
