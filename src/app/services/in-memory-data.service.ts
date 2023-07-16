import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contacto } from './contacto';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contactos = [
      { id: 1, name: 'Edilberto Rodríguez', nickname: "Apodo", phone: 322938482, type: "main" },
      { id: 2, name: 'Otro Nombre', nickname: "Persona", phone: 3123131313, type: "main" },
    ];
    return {contactos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(contactos: Contacto[]): number {
    return contactos.length > 0 ? Math.max(...contactos.map(contacto => contacto.id)) + 1 : 1;
  }
}