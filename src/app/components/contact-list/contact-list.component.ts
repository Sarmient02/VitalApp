import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/services/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent  implements OnInit {
  contactos: Contacto[] = [];

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.contactoService.getContactos()
    .subscribe(contactos => this.contactos = contactos);
  }

}
