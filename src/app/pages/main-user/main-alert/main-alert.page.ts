import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/services/contacto';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-main-alert',
  templateUrl: './main-alert.page.html',
  styleUrls: ['./main-alert.page.scss'],
})
export class MainAlertPage implements OnInit {

  contacts: Contacto[] = [];

  constructor(
    private contactsService: ContactsService,
  ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

}
