import { Injectable } from '@angular/core';
import { Contacto } from './contacto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contacto[] = [
    {id: 1, name: 'Juan Perez', nickname: 'Hijo', phone: "+57 315 3766788", type: 'support', image: 'https://randomuser.me/api/portraits/men/45.jpg'},
    {id: 2, name: 'Andrea Díaz', nickname: 'Sobrina', phone: "+57 318 8859236", type: 'support', image: 'https://randomuser.me/api/portraits/women/55.jpg'},
    {id: 3, name: 'Maria Lopez', nickname: 'Amiga', phone: "+57 302 3856991", type: 'support', image: 'https://randomuser.me/api/portraits/women/8.jpg'},
    {id: 4, name: 'AME', nickname: 'Asistencia Médica', phone: "607 6577171", type: 'emergency', image: 'https://pbs.twimg.com/profile_images/949639369488465920/sBF5SBLB_400x400.jpg'},
    {id: 5, name: 'Ambulancia', nickname: '', phone: "911", type: 'emergency', image: 'https://televen.com/wp-content/uploads/2019/07/911-accesolatino.jpg'},
  ];

  coordenadas: any= [
    [7.1406,-73.1242], [7.1384,-73.1229], [7.14044,-73.12027], [7.13934,-73.11921], [7.13966,-73.12291],
    [7.14205,-73.11870], [7.14049,-73.11606], [7.14048,-73.12243], [7.13927,-73.12027], [7.13738,-73.12031]
  ];

  contactosChanged = new Subject<Contacto[]>();

  ID = 5;

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
    const index = this.contacts.findIndex(c => c.id == id);
    console.log(index);
    this.contacts[index] = contact;
    console.log("editing contact: ", this.contacts[index])
    this.contacts = this.contacts.slice();
    this.contactosChanged.next(this.contacts);
  }

  deleteContact(id: number): void {
    const index = this.contacts.findIndex(c => c.id == id);
    console.log(index);
    console.log(id);
    console.log(this.contacts);
    this.contacts.splice(index, 1);
    console.log(this.contacts);
    this.contactosChanged.next(this.contacts);
  }

  getDefaultImage(): string {
    return 'https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg';
  }

  getRandomCoords() {
    let randomIndex = Math.floor(Math.random() * this.coordenadas.length);
    let coords = this.coordenadas[randomIndex];
    this.coordenadas.splice(randomIndex, 1);
    return coords;
  }

}
