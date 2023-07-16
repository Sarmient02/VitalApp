import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/services/contacto';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent  implements OnInit {

  @Input() contactos: Contacto[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
