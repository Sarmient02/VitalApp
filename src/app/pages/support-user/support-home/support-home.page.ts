import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-support-home',
  templateUrl: './support-home.page.html',
  styleUrls: ['./support-home.page.scss'],
})
export class SupportHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
