import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginInfoComponent } from 'src/app/components/login-info/login-info.component';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  activeUser!: User;

  @ViewChild(LoginInfoComponent) 
  loginInfo!: LoginInfoComponent;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activeUser = this.userService.getActiveUser();

    this.userService.activeUserChanged.subscribe((activeUser) => {
      this.activeUser = activeUser;
    });
  }

  async loginUser(){
    console.log("clicked login")
     if (this.loginInfo.loginUser()){
      const alert = await this.alertController.create({
        header: "¡Bienvenido!",
        message: "Has iniciado sesión correctamente.",
        buttons: ["OK"]
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      this.sendToHome();
     } else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Tu teléfono o contraseña son incorrectos. Intenta de nuevo.',
        buttons: ['Volver']
      });
      await alert.present();
     }
  }

  sendToHome(){
    console.log(this.activeUser);
    if (this.activeUser.userType == "main"){
      this.router.navigate(["main-tabs/home"]);
    } else {
      this.router.navigate(["support-tabs/home"]);
    }
  }

}
