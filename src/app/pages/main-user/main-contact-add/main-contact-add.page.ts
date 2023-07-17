import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactInfoComponent } from 'src/app/components/contact-info/contact-info.component';

@Component({
  selector: 'app-main-contact-add',
  templateUrl: './main-contact-add.page.html',
  styleUrls: ['./main-contact-add.page.scss'],
})
export class MainContactAddPage implements OnInit {

  public alertButtons = ["OK"];

  @ViewChild(ContactInfoComponent) 
  contactInfo!: ContactInfoComponent;

  contact: any = {
    name: '',
    phone: ''
  };

  buttonColor: string = "primary";
  buttonTextColor: string = "";
  buttonIcon: string = "person_add";
  buttonText: string = "Añadir Contacto";
  hasBeenAdded: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      //console.log("add-name: ", params['name']);

      this.contact.name = params['name'];
      this.contact.phone = params['phone'];
    })
  }

  clickedAddContact(): void{
    if (this.hasBeenAdded == false){
      this.hasBeenAdded = true;
      this.contactInfo.clickedAddContact();
      this.buttonColor = "success";
      this.buttonIcon = "how_to_reg";
      this.buttonText = "Contacto Añadido";
    }
  }

  sendToContacts(){
    this.router.navigate(['main-tabs/contacts']);
  }
}
