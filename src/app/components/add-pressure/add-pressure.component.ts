import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Pressure } from 'src/app/services/pressure';
import { DatePipe } from '@angular/common';
import { PressureHistoryService } from 'src/app/services/pressure-history.service';

@Component({
  selector: 'app-add-pressure',
  templateUrl: './add-pressure.component.html',
  styleUrls: ['./add-pressure.component.scss'],
  providers: [DatePipe]
})
export class AddPressureComponent  implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,
    private datePipe: DatePipe,
    private pressureController: PressureHistoryService
  ) { }

  systolicPressure: boolean = false;
  diastolicPressure: boolean = false;
  heartbeatPressure: boolean = false;

  date: string = '';

  newPressure: Pressure = {
    id: 0,
    systolic: 0,
    diastolic: 0,
    heartbeat: 0,
    date: ''
  };

  ngOnInit() {
    const transformedDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    if (transformedDate !== null) {
      this.date = transformedDate;
      this.newPressure.date = this.date;
      console.log(this.date);
    } else {
      // Handle the case where the transformed date is null
    }
  }
  

  goToHistory(){
    this.router.navigate(['main-tabs/control/history']);
  }

  async clickedAddPressure(): Promise<void> {
    if (this.systolicPressure && this.diastolicPressure && this.heartbeatPressure) {
      this.pressureController.addPressure(this.newPressure);
      const alert = await this.alertController.create({
        header:"¡Excelente!",
        message:"La toma presión ha sido agregada.",
        buttons: ['OK']
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
    } else {
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Debes ingresar todos los valores de la toma de presión.',
        buttons: ['Volver']
      });
  
      await alert.present();
    }
  }

  onDiastolicInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0){
      this.newPressure.diastolic = parseInt(inputElement.value);
      this.systolicPressure = true;
      }else {
        this.systolicPressure = false;
      }
    console.log(this.newPressure.diastolic);
  }

  onSystolicInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0){
      this.newPressure.systolic = parseInt(inputElement.value);
      this.diastolicPressure = true;
      }else {
        this.diastolicPressure = false;
      }
    console.log(this.newPressure.systolic);
  }

  onHeartbeatInput(event: Event){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0){
      this.newPressure.heartbeat = parseInt(inputElement.value);
      this.heartbeatPressure = true;
    }else {
      this.heartbeatPressure = false;
    }
    console.log(this.newPressure.heartbeat);
  }

}
