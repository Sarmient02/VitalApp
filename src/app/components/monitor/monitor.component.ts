import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit, OnDestroy {
  latestSystolic: number | undefined;
  latestDiastolic: number | undefined;
  latestHeartbeat: number | undefined;
  chart: any;
  isChartInitialized: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
      // Initialize or update the chart data
    this.initializeOrUpdateChart();

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

    // Start updating the chart data at regular intervals
    setInterval(() => {
      this.updateChartData();
    }, 1000);
  }

  ionViewWillLeave() {
    this.isChartInitialized = false;
  }

  initializeOrUpdateChart() {
    if (!this.isChartInitialized) {
      this.chart = new Chart('myChart3', {
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
      this.isChartInitialized = true;
    } else {
      // Update the chart data
      this.updateChartData();
    }
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

  ngOnDestroy() {
    // Clean up the chart instance when leaving the component
    if (this.chart) {
      this.chart.destroy();
      this.isChartInitialized = false;
      console.log("destroy")
    }
  }

  goToSynchronize() {
    this.isChartInitialized = false;
    this.router.navigate(['control/synchronize']);
  }

  getBloodPressureData() {
    // Aquí puedes obtener los datos del tensiómetro desde un dispositivo externo o generar datos simulados
    return {
      systolic: Math.random() * (140 - 90) + 90,
      diastolic: Math.random() * (90 - 60) + 60,
      heartbeat: Math.random() * (100 - 60) + 60,
    };
  }
}