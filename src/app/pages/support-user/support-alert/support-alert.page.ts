import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/services/contacto';
import { ContactsService } from 'src/app/services/contacts.service';


@Component({
  selector: 'app-support-alert',
  templateUrl: './support-alert.page.html',
  styleUrls: ['./support-alert.page.scss'],
})
export class SupportAlertPage implements OnInit {

  contacts: Contacto[] = [];

  constructor(
    private contactsService: ContactsService,
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
