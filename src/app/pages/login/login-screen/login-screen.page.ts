import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginInfoComponent } from 'src/app/components/login-info/login-info.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  @ViewChild(LoginInfoComponent) 
  loginInfo!: LoginInfoComponent;

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
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
    this.router.navigate(["main-tabs/home"]);
  }

}
