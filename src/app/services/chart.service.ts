import { Injectable } from '@angular/core';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { 
    
  }

  chart: Chart | undefined;

  destroyChart(){
    if(this.chart != undefined){
      this.chart.destroy();
    }
    console.log(this.chart)
    return this.chart;
  }

  getChart(){
    this.chart = new Chart('myChart2', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Presión Sistólica',
            data: [],
            borderColor: '#3cba9f',
            fill: false,
            borderWidth: 1.5,
            pointRadius: 1,
          },
          {
            label: 'Presión Diastólica',
            data: [],
            borderColor: '#ffcc00',
            fill: false,
            borderWidth: 1.5,
            pointRadius: 1,
          },
          {
            label: 'Heartbeat',
            data: [],
            borderColor: '#ff0000',
            fill: false,
            borderWidth: 1.5,
            pointRadius: 1,
          },
        ],        
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 7.5,
                weight: 'bold',
              },
              color: '#0857de',
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 7.5,
                weight: 'bold',
              },
              color: '#0857de',
            },
          },
        },
      },
    });
    return this.chart;
  }
}
