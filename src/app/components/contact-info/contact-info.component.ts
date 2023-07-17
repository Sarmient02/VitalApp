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
  contact: any = {
    name: '',
    phone: '',
    type: '',
    nickname: ''
  };


  contactoCreado!: Contacto;
  newContactNickname: string = "";
  newContactType: string = "support";

  confianzaImage: string = "assets/icon/contact-type/confianza_1_large_gray.png";
  medicoImage: string = "assets/icon/contact-type/medical_1_large_gray.png";

  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.contact.name = params["name"];
      this.contact.phone = params["phone"];
      this.contact.type = params["type"];
      this.contact.nickname = params["nickname"];
      this.newContactNickname = params["nickname"];
    })
  }

  onNameInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.newContactNickname = inputElement.value;
  }

  clickedConfianza(){
    this.newContactType = "support";
    this.confianzaImage = "assets/icon/contact-type/confianza_1_large.png";
    this.medicoImage = "assets/icon/contact-type/medical_1_large_gray.png";
    console.log("name: ", this.newContactNickname)
  }

  clickedMedico(){
    this.newContactType = "emergency";
    this.confianzaImage = "assets/icon/contact-type/confianza_1_large_gray.png";
    this.medicoImage = "assets/icon/contact-type/medical_1_large.png";
  }

  clickedAddContact(){
    this.contactoCreado = {
      id: 1,
      name: this.contact.name,
      nickname: this.newContactNickname,
      phone: this.contact.phone,
      type: this.newContactType
    } as Contacto;
    console.log(this.contactoCreado);
    this.contactsService.addContact(this.contactoCreado);
  }
}
