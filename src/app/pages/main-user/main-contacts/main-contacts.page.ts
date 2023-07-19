import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contacto } from 'src/app/services/contacto';
import { Contacts } from '@capacitor-community/contacts'
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-main-contacts',
  templateUrl: './main-contacts.page.html',
  styleUrls: ['./main-contacts.page.scss'],
})
export class MainContactsPage implements OnInit {

  contact: any;
  contactItems = {
    name: '',
    phone: ''
  };

  activeUser!: User;

  contacts: Contacto[] = [];

  constructor(
    private router: Router,
    private contactsService: ContactsService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.activeUser = this.userService.getActiveUser();

    this.contactsService.contactosChanged.subscribe((contactos) => {
      this.contacts = contactos;
    });
  }
  
  async pickContact() {
    try {
      const permission = await Contacts.requestPermissions();
      if (!permission?.contacts) return;
      else if (permission?.contacts == "granted") {
        const result = await Contacts.pickContact({
          projection: {
            name: true,
            phones: true
          }
        })
        this.contact = result;

        this.contactItems.name = this.contact.contact?.name.display;
        this.contactItems.phone = this.contact.contact?.phones[0]?.number;

        console.log("name: ", this.contact.contact?.name.display);
        console.log("phone: ", this.contact.contact?.phones[0]?.number);


        if (this.activeUser.userType == "main"){
          this.router.navigate(
            ['main-tabs/contacts/add'],
            { queryParams: {name: this.contactItems.name, phone: this.contactItems.phone}}
          )
        } else {
          this.router.navigate(
            ['support-tabs/contacts/add'],
            { queryParams: {name: this.contactItems.name, phone: this.contactItems.phone}}
          )
        }
      }
    } catch(e) {
      console.log(e);
    }
  }
}
