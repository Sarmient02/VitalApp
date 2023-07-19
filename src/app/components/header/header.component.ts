import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent  implements OnInit {

  @Output()
  configEvent: EventEmitter<any> = new EventEmitter<any>();

  activeUser!: User;

  constructor(
    private router: Router,
    private userService: UserService
    ) { }

  @Input() title = 'Inicio';

  @Input() ruta = 'main-tabs/home';
  
  ngOnInit() {
    this.activeUser = this.userService.getActiveUser();
  }

  myBackButton() {
    this.router.navigate([this.ruta]);
  }

  clickedConfig(){
    if(this.activeUser.userType == "main"){
      this.router.navigate(['main-tabs/home/config']);
    } else {
      this.router.navigate(['support-tabs/home/config']);
    }
  }
}
