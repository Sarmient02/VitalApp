import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Contacto } from '../../services/contacto';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent  implements OnInit {

  @Input()
  contact: Contacto = {
    id: 0,
    name: '',
    phone: '',
    type: '',
    nickname: ''
  };

  contactoCreado!: Contacto;
  newContactNickname: string = "";
  newContactType: string = "";
  typePressed: boolean = false;

  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.contact.id = params["id"];
      this.contact.name = params["name"];
      this.contact.phone = params["phone"];
      this.contact.type = params["type"];
      this.contact.nickname = params["nickname"];
      this.newContactNickname = params["nickname"];
      this.newContactType = params["type"];
    });
  }

  onNameInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.newContactNickname = inputElement.value;
  }

  clickedConfianza(){
    this.newContactType = "support";
    this.typePressed = true;
  }

  clickedMedico(){
    this.newContactType = "emergency";
    this.typePressed = true;
  }

  clickedAddContact(): boolean{
    this.contactoCreado = {
      id: this.contact.id,
      name: this.contact.name,
      nickname: this.newContactNickname,
      phone: this.contact.phone,
      type: this.newContactType
    };
    if (this.typePressed == false){
      return false;
    }else {
      this.contactsService.addContact(this.contactoCreado);
      return true;
    }
    
  }

  clickedEditContact(): boolean{
    this.contactoCreado = {
      id: this.contact.id,
      name: this.contact.name,
      nickname: this.newContactNickname,
      phone: this.contact.phone,
      type: this.newContactType
    };
    console.log(this.contactoCreado);
    this.contactsService.updateContact(this.contactoCreado.id, this.contactoCreado);
    return true;
  }

  clickedDeleteContact(): boolean{
    this.contactoCreado = {
      id: this.contact.id,
      name: this.contact.name,
      nickname: this.newContactNickname,
      phone: this.contact.phone,
      type: this.newContactType
    };
    console.log(this.contactoCreado);
    this.contactsService.deleteContact(this.contactoCreado.id);
    return true;
  }
}
