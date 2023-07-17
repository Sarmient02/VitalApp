import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ContactInfoComponent } from 'src/app/components/contact-info/contact-info.component';
import { Contacto } from 'src/app/services/contacto';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-main-contact-edit',
  templateUrl: './main-contact-edit.page.html',
  styleUrls: ['./main-contact-edit.page.scss'],
})
export class MainContactEditPage implements OnInit {

  contact: Contacto = {} as Contacto;

  @ViewChild(ContactInfoComponent) 
  contactInfo!: ContactInfoComponent;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private contactsService: ContactsService,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const contacto = params;
    })
  }

  async editPressedContact(): Promise<void>{
    if(this.contactInfo.clickedEditContact()){
      const alert = await this.alertController.create({
        header:"¡Excelente!",
        message:"Los cambios han sido guardados exitosamente.",
        buttons: ['OK']
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      this.route.navigate(['main-tabs/contacts']);
    }
  }

  async deletePressedContact(): Promise<void>{
      const alert = await this.alertController.create({
        header:"Eliminar contacto",
        message:"¿Estás seguro de que deseas eliminar este contacto?",
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              console.log('Aceptar clicked');
              this.contactInfo.clickedDeleteContact()
              this.route.navigate(['main-tabs/contacts']);
            }
          }
        ]
      });
      await alert.present();
  }

}
