import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor() { }

  connectedDevice: number = 0;

  connectedChanged = new Subject<any[]>();

  devices = [
    {
        id: 1,
        name: "Samsung Galaxy Watch Active 2",
        connected: false
    },
    {
        id: 2,
        name: "Amazfit GTS 4",
        connected: false
    },
    {
        id: 3,
        name: "Apple Watch Series 6",
        connected: false
    },
    {
        id: 4,
        name: "Huawei FIT 2 Active",
        connected: false
    },
    {
        id: 5,
        name: "Xiaomi Mi Smart Band 5",
        connected: false
    },
    {
        id: 6,
        name: "Huawei Band 4 Pro",
        connected: false
    },
    {
        id: 7,
        name: "Huawei Band 4",
        connected: false
    },
    {
        id: 8,
        name: "Samsung Galaxy Fit e",
        connected: false
    }
  ];

  getDevices(){
    return this.devices;
  }

  updateConnectedDevice(id: number, device: any){
    const index = this.devices.findIndex(c => c.id == id);
    console.log(index);
    this.devices[index].connected = true;
    console.log("editing contact: ", this.devices[index])
    this.devices = this.devices.slice();
    this.connectedChanged.next(this.devices);
  }

  updateDisconnectedDevice(id: number, device: any){
    const index = this.devices.findIndex(c => c.id == id);
    console.log(index);
    this.devices[index].connected = false;
    console.log("editing contact: ", this.devices[index])
    this.devices = this.devices.slice();
    this.connectedChanged.next(this.devices);
  }

  getIDConnectedDevice(){
    return this.connectedDevice;
  }

}
