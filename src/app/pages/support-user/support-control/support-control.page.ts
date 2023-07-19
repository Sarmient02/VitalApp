import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contacto } from 'src/app/services/contacto';
import { Contacts } from '@capacitor-community/contacts'

@Component({
  selector: 'app-support-control',
  templateUrl: './support-control.page.html',
  styleUrls: ['./support-control.page.scss'],
})
export class SupportControlPage implements OnInit {

  contact: any;
  contactItems = {
    name: '',
    phone: ''
  };

  contacts: Contacto[] = [];

  constructor(
    private router: Router,
    private contactsService: ContactsService
    ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();

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

        this.router.navigate(
        ['support-tabs/control/history'],
        { queryParams: {name: this.contactItems.name, phone: this.contactItems.phone}
      }
        )
      }
    } catch(e) {
      console.log(e);
    }
  }

}
