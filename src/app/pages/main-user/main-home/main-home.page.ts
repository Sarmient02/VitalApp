import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    console.log(this.userService.getUsers());
  }

}
