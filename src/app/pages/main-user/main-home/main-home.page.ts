import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.page.html',
  styleUrls: ['./main-home.page.scss'],
})
export class MainHomePage implements OnInit {

  user: User = {
    id: 0,
    name: '',
    phone: '',
    password: '',
    userType: ''
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //console.log(this.userService.getUsers());
    this.route.queryParams.subscribe(params => {
      this.user = this.userService.getUserFromId(params["id"]);
    })
    console.log(this.user);
  }
}
