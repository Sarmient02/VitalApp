import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contacto[] = [
    {id: 1, name: 'Juan Perez', nickname: 'xdadasdsadsadasdsadsa', phone: "+57 300 8001221", type: 'emergency'},
    {id: 2, name: 'Pedro Garcia', nickname: 'xd', phone: "987654321", type: 'support'},
  ];

  contactosChanged = new Subject<Contacto[]>();

  ID = 2;

  constructor() { }

  getContacts(): Contacto[] {
    return this.contacts;
  }

  addContact(contact: Contacto): void {
    console.log("creating new contact: ", contact)
    contact.id = this.getNewID();
    this.contacts.push(contact);
    this.contactosChanged.next(this.contacts);
  }

  getNewID(): number {
    this.ID = this.ID + 1;
    return this.ID;
  }

  updateContact(id: number, contact: Contacto): void {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts[index] = {...contact, id};
    }
    this.contactosChanged.next(this.contacts);
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

}
