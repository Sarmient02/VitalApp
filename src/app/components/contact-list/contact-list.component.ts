import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/services/contacto';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent  implements OnInit {

  @Input() contactos: Contacto[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  editPressedContact(contact: Contacto): void{
    this.router.navigate(['main-tabs/contacts/edit'],
    {queryParams: contact})
  }

}
