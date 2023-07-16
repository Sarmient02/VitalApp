import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-main-contacts',
  templateUrl: './main-contacts.page.html',
  styleUrls: ['./main-contacts.page.scss'],
})
export class MainContactsPage implements OnInit {

  contact: any;

  constructor(private router: Router) { }

  ngOnInit() {
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
