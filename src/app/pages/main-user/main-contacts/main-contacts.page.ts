import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contacto } from 'src/app/services/contacto';

@Component({
  selector: 'app-main-contacts',
  templateUrl: './main-contacts.page.html',
  styleUrls: ['./main-contacts.page.scss'],
})
export class MainContactsPage implements OnInit {

  contact: any;

  constructor(private router: Router) { }

  constructor(
    private router: Router,
    private contactsService: ContactsService
    ) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }

  async pickContact() {
    const picked_contact = await Contacts.pickContact({
      projection: {
        name: true,
        phones: true
      }
    });
    this.contact = picked_contact;
    //return picked_contact;
    this.router.navigate(['add'])
  }
}
