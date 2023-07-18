import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-alert-monitor',
  templateUrl: './alert-monitor.component.html',
  styleUrls: ['./alert-monitor.component.scss'],
})
export class AlertMonitorComponent  implements OnInit {

  latestSystolic: number | undefined;
  latestDiastolic: number | undefined;
  latestHeartbeat: number | undefined;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {

    // Genera 30 datos iniciales para el gráfico
    for (let i = 0; i < 20; i++) {
      const bloodPressureData = this.getBloodPressureData();
      const currentTime = new Date();
      currentTime.setSeconds(currentTime.getSeconds() - (20 - i));
      if(i == 19){
        this.latestSystolic = bloodPressureData.systolic;
        this.latestDiastolic = bloodPressureData.diastolic;
        this.latestHeartbeat = bloodPressureData.heartbeat;
      }
    }

  }
  
  getBloodPressureData() {
    // Aquí puedes obtener los datos del tensiómetro desde un dispositivo externo o generar datos simulados
    return {
      systolic: Math.random() * (140 - 90) + 90,
      diastolic: Math.random() * (90 - 60) + 60,
      heartbeat: Math.random() * (100 - 60) + 60,
    };
  }

  

  async openModal() {
    const modal = await this.modalController.create({
      component: AlertModalComponent,
      backdropDismiss: true,
      cssClass: 'premio-modal',
      componentProps: {
        'latestSystolic': this.latestSystolic,
        'latestDiastolic': this.latestDiastolic,
        'latestHeartbeat': this.latestHeartbeat,
      }
    });
    return await modal.present();
  }
  

}
