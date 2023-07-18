import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-config-info',
  templateUrl: './config-info.component.html',
  styleUrls: ['./config-info.component.scss'],
})
export class ConfigInfoComponent  implements OnInit {

  @Input()
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

  ngOnInit() {}

  testFunction(){
    console.log(this.user);
  }

}
