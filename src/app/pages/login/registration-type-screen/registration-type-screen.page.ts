import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/services/user/user';

@Component({
  selector: 'app-registration-type-screen',
  templateUrl: './registration-type-screen.page.html',
  styleUrls: ['./registration-type-screen.page.scss'],
})
export class RegistrationTypeScreenPage implements OnInit {

  user: any = {
    id: 0,
    name: '',
    phone: '',
    password: '',
    type: ''
  };

  mainButtonColor: string = "medium";
  contactButtonColor: string = "medium";
  hasClickedType: boolean = false;

  newUser!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.user.name = params['name'];
      this.user.phone = params['phone'];
      this.user.password = params['password'];
    })

    console.log(this.user);
  }

  clickedMainType(): void{
    this.mainButtonColor = "primary";
    this.contactButtonColor = "medium";
    this.user.type = "main";
    this.hasClickedType = true;
  }

  clickedContactType(): void{
    this.mainButtonColor = "medium";
    this.contactButtonColor = "primary";
    this.user.type = "contact";
    this.hasClickedType = true;
  }

  sendToMainPage(){
    if (this.user.type == "main"){
      console.log("going to main page")
      console.log(this.userService.getUsers());
      this.router.navigate(["main-tabs/home"],
      {queryParams: {id: this.newUser.id}})
    } else if (this.user.type == "contact") {
      console.log("going to contact page")
    } else {
      console.log("error: wrong user type")
    }
  }

  async clickedNext(): Promise<void>{
    if (this.hasClickedType == true) {
      this.hasClickedType = true;
      const alert = await this.alertController.create({
        header:"¡Excelente!",
        message:"Tu registro ha sido exitoso.",
        buttons: ['OK']
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      this.newUser = this.user as User;
      this.userService.addUser(this.newUser);
      this.sendToMainPage();
    } else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Debes elegir un tipo de usuario.',
        buttons: ['Volver']
      });
  
      await alert.present();
    }
  }
}
