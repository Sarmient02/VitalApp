import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactInfoComponent } from 'src/app/components/contact-info/contact-info.component';
import { AlertController } from '@ionic/angular';
import { ContactsService } from 'src/app/services/contacts.service';

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
    phone: '',
    image: ''
  };

  buttonColor: string = "primary";
  buttonTextColor: string = "";
  buttonIcon: string = "person_add";
  buttonText: string = "Añadir Contacto";
  hasBeenAdded: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.contact.name = params['name'];
      this.contact.phone = params['phone'];
    });
    this.contact.image = this.contactsService.getDefaultImage();
  }

  async clickedAddContact(): Promise<void> {
    if (this.hasBeenAdded == false && this.contactInfo.clickedAddContact()) {
      this.hasBeenAdded = true;
      this.buttonColor = "success";
      this.buttonIcon = "how_to_reg";
      this.buttonText = "Contacto Añadido";
      const alert = await this.alertController.create({
        header:"¡Excelente!",
        message:"El contacto ha sido añadido exitosamente.",
        buttons: ['OK']
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      this.sendToContacts();
    } else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Debes elegir un tipo para tu contacto de emergencia.',
        buttons: ['Volver']
      });
  
      await alert.present();
    }
  }
  
  sendToContacts(){
    this.router.navigate(['main-tabs/contacts']);
  }
}
