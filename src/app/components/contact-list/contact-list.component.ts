import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/services/contacto';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent  implements OnInit {

  @Input() contactos: Contacto[] = [];

  activeUser!: User;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activeUser = this.userService.getActiveUser();
  }

  editPressedContact(contact: Contacto): void{
    if(this.activeUser.userType == "main"){
      this.router.navigate(['main-tabs/contacts/edit'],
      {queryParams: contact})
    } else {
      this.router.navigate(['support-tabs/contacts/edit'],
      {queryParams: contact})
    }
  }

}
