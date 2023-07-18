import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Contacto } from 'src/app/services/contacto';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit {

  map!: L.Map;

  @Input() contactos: Contacto[] = [];

  myIcon = L.divIcon({
    className: 'my-div-icon',
    html: '<i class="material-symbols-rounded">person_pin</i>',
    iconSize: [45, 45],
    iconAnchor: [10, 10]
  });

  emergencyIcon = L.divIcon({
    className: 'emergency-icon',
    html: '<i class="material-symbols-rounded">medical_services</i>',
    iconSize: [45, 45],
    iconAnchor: [10, 10]
  });

  supportIcon = L.divIcon({
    className: 'support-icon',
    html: '<i class="material-symbols-rounded">diversity_1</i>',
    iconSize: [45, 45],
    iconAnchor: [10, 10]
  });

  constructor(
  ) {
  }

  ngOnInit() {
    this.map = L.map('mapId', {
      center: [7.14082,-73.12157],
      zoom: 20,
      renderer: L.canvas(),
    });

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

    L.marker([7.14082,-73.12157], {icon: this.myIcon}).addTo(this.map)
        .bindPopup("Aquí está usted")
        .openPopup();

    for(var contacto of this.contactos){
      if(contacto.type == "emergency"){
        L.marker([7.13967,-73.12152], {icon: this.emergencyIcon}).addTo(this.map)
        .bindPopup(contacto.name);
      }
      if(contacto.type == "support"){
        L.marker([7.14168,-73.12151], {icon: this.supportIcon}).addTo(this.map)
        .bindPopup(contacto.name);
      }
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

}