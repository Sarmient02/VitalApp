import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-main-synchronize',
  templateUrl: './main-synchronize.page.html',
  styleUrls: ['./main-synchronize.page.scss'],
})
export class MainSynchronizePage implements OnInit {

  constructor(
    private devicesService: DevicesService,
    private alertController: AlertController
  ) { }

  pulseras: any[] = [];
  idConnectedDevice: number = 0;

  ngOnInit() {
    this.pulseras = this.devicesService.getDevices();
    this.idConnectedDevice = this.devicesService.getIDConnectedDevice();
  }

  async clickConnectDevice(id:number, device:any): Promise<void> {
    if (device.connected) {
      const alert = await this.alertController.create({
        header: 'Desconectar dispositivo',
        message: '¿Desea desconectar este dispositivo?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Desconectar',
            handler: () => {
              this.devicesService.updateDisconnectedDevice(id, device);
            },
          },
        ],
      });
  
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Conectar dispositivo',
        message: '¿Desea conectar este dispositivo?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
          },
          {
            text: 'Conectar',
            handler: () => {
              this.devicesService.updateConnectedDevice(id, device);
              this.idConnectedDevice = id;
            },
          },
        ],
      });
  
      await alert.present();
    }

  }
  
  
}



