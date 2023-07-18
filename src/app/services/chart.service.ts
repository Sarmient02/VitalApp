import { Injectable } from '@angular/core';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  getNewChartName() {
    return 'myChart' + Math.floor(Math.random() * 1000);
  }
}
