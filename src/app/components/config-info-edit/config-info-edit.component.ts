import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-config-info-edit',
  templateUrl: './config-info-edit.component.html',
  styleUrls: ['./config-info-edit.component.scss'],
})
export class ConfigInfoEditComponent  implements OnInit {

  activeUser!: User;

  newUserName!: string;
  newUserPhone!: string;
  newUserPassword!: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activeUser = this.userService.getActiveUser();
    console.log(this.activeUser)
  }

  onNameInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.newUserName = inputElement.value;
  }

  onPhoneInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.newUserPhone = inputElement.value;
  }

  onPasswordInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.newUserPassword = inputElement.value;
  }

  async clickedSaveChanges(){
    const alert = await this.alertController.create({
      header:"¡Excelente!",
      message:"Los cambios han sido guardados exitosamente.",
      buttons: ['OK']
    });
    // No security checks!
    if (this.newUserName == undefined || this.newUserName == "") this.newUserName = this.activeUser.name;
    if (this.newUserPhone == undefined || this.newUserPhone == "") this.newUserPhone = this.activeUser.phone;
    if (this.newUserPassword == undefined || this.newUserPassword == "") this.newUserPassword = this.activeUser.password;
    this.activeUser.name = this.newUserName;
    this.activeUser.phone = this.newUserPhone;
    this.activeUser.password = this.newUserPassword;
    await alert.present();
    const { role } = await alert.onDidDismiss();
    if (this.activeUser.userType == "main") {
      this.router.navigate(['main-tabs/home/config']);
    }
    else {
      this.router.navigate(['support-tabs/home/config']);
    }
  }
}
