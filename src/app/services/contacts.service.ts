import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contacto[] = [
    {id: 1, name: 'Juan Perez', nickname: 'xd', phone: 123456789, type: 'emergency'},
    {id: 2, name: 'Pedro Garcia', nickname: 'xd', phone: 987654321, type: 'support'},
    {id: 3, name: 'Maria Lopez', nickname: 'xd', phone: 123456789, type: 'emergency'},
    {id: 4, name: 'Ana Gonzalez', nickname: 'xd', phone: 987654321, type: 'support'},
    {id: 5, name: 'Luis Rodriguez', nickname: 'xd', phone: 123456789, type: 'emergency'},
    {id: 6, name: 'Rosa Sanchez', nickname: 'xd', phone: 987654321, type: 'support'},
    {id: 7, name: 'Carlos Fernandez', nickname: 'xd', phone: 123456789, type: 'emergency'},
    {id: 8, name: 'Sara Martinez', nickname: 'xd', phone: 987654321, type: 'support'},
    {id: 9, name: 'Javier Gomez', nickname: 'xd', phone: 123456789, type: 'emergency'},
    {id: 10, name: 'Laura Ruiz', nickname: 'xd', phone: 987654321, type: 'support'},
  ];

  contactosChanged = new Subject<Contacto[]>();

  ID = 10;

  constructor() { }

  getContacts(): Contacto[] {
    return this.contacts;
  }

  addContact(contact: Contacto): void {
    contact.id = this.ID++;
    this.contacts.push(contact);
    this.contactosChanged.next(this.contacts);
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
