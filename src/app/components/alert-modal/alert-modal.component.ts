import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);
@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent  implements OnInit {

  latestSystolic: number | undefined;
  latestDiastolic: number | undefined;
  latestHeartbeat: number | undefined;
  chart: any;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
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
    

    // Genera 30 datos iniciales para el gráfico
    for (let i = 0; i < 20; i++) {
      const bloodPressureData = this.getBloodPressureData();
      const currentTime = new Date();
      currentTime.setSeconds(currentTime.getSeconds() - (20 - i));
      this.chart.data.labels.push(currentTime.getSeconds().toString());
      this.chart.data.datasets[0].data.push({ x: currentTime, y: bloodPressureData.systolic });
      this.chart.data.datasets[1].data.push({ x: currentTime, y: bloodPressureData.diastolic });
      this.chart.data.datasets[2].data.push({ x: currentTime, y: bloodPressureData.heartbeat });
      if(i == 19){
        this.latestSystolic = bloodPressureData.systolic;
        this.latestDiastolic = bloodPressureData.diastolic;
        this.latestHeartbeat = bloodPressureData.heartbeat;
      }
    }

    setInterval(() => {
      this.updateChartData();
    }, 1000);
  }

  updateChartData() {
    // Aquí puedes obtener los datos del tensiómetro y actualizar el gráfico
    const bloodPressureData = this.getBloodPressureData();
    const currentTime = new Date();
    this.chart.data.labels.push(currentTime.getSeconds().toString());
    this.chart.data.datasets[0].data.push({ x: currentTime, y: bloodPressureData.systolic });
    this.chart.data.datasets[1].data.push({ x: currentTime, y: bloodPressureData.diastolic });
    this.chart.data.datasets[2].data.push({ x: currentTime, y: bloodPressureData.heartbeat });
    this.chart.update();
    this.chart.data.labels.shift();
    this.chart.data.datasets[0].data.shift();
    this.chart.data.datasets[1].data.shift();
    this.chart.data.datasets[2].data.shift();

    // Update the latest values in the component properties
    this.latestSystolic = bloodPressureData.systolic;
    this.latestDiastolic = bloodPressureData.diastolic;
    this.latestHeartbeat = bloodPressureData.heartbeat;
  }
  
  getBloodPressureData() {
    // Aquí puedes obtener los datos del tensiómetro desde un dispositivo externo o generar datos simulados
    return {
      systolic: Math.random() * (140 - 90) + 90,
      diastolic: Math.random() * (90 - 60) + 60,
      heartbeat: Math.random() * (100 - 60) + 60,
    };
  }


  closeModal() {
    this.modalController.dismiss();
    this.chart.destroy();
  }

  ngOnDestroy() {
    this.chart.destroy();
  }

  ionViewWillLeave() {
    this.chart.destroy();
  }

  ionViewDidLeave() {
    this.chart.destroy();
  }

}
