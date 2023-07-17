import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit {

  map!: L.Map;

  constructor() {
  }

  ngOnInit() {
    this.map = L.map('mapId', {
      center: [7.1193, -73.1227],
      zoom: 15,
      renderer: L.canvas(),
    });

    L.marker([7.1193, -73.1227]).addTo(this.map)
      .bindPopup('Bucaramanga, Colombia')
      .openPopup();

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }

}