import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import { ChartService } from 'src/app/services/chart.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { User } from 'src/app/services/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit {
  latestSystolic: number | undefined;
  latestDiastolic: number | undefined;
  latestHeartbeat: number | undefined;
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  activeUser!: User;

  constructor(
    private router: Router,
    private chartService: ChartService,
    private userService: UserService
  ) { }

  public lineChartData: any[] = [
    { data: [], label: 'Presión Sistólica', borderColor: '#3cba9f', fill: false, borderWidth: 1, pointRadius: 2, pointBackgroundColor: '#39a58d' },
    { data: [], label: 'Presión Diastólica', borderColor: '#ffcc00', fill: false, borderWidth: 1, pointRadius: 2, pointBackgroundColor: '#e1b502' },
    { data: [], label: 'Heartbeat', borderColor: '#ff0000', fill: false, borderWidth: 1, pointRadius: 2, pointBackgroundColor: '#d00000' }
  ];
  
  
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      x:{
        grid:{
          display:false
        },
        ticks:{
          color:'#0857de',
          font:{
            size:7.5,
            weight:'bold'
          }
        }
      },
      y:{
        grid:{
          display:false
        },
        ticks:{
          color:'#0857de',
          font:{
            size:7.5,
            weight:'bold'
          }
        }
      }
    },
    plugins:{
      legend:{
        display:false
      }
    }
  };
  public lineChartType = 'line';

  public chartColors: Array<any> = [
    {
      // first color
      borderColor: "#36ff2f",
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
    },
    {
      // second color
      borderColor: '#1780cc',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
    }
  ];
  

  ngOnInit() {
    this.activeUser = this.userService.getActiveUser();

    // Initialize the chart data with the first 30 data points
    for (let i = 0; i < 30; i++) {
      const bloodPressureData = this.getBloodPressureData();
      const currentTime = new Date();
      currentTime.setSeconds(currentTime.getSeconds() - (30 - i));
      this.lineChartLabels.push(currentTime.getSeconds().toString());
      this.lineChartData[0].data.push(bloodPressureData.systolic);
      this.lineChartData[1].data.push(bloodPressureData.diastolic);
      this.lineChartData[2].data.push(bloodPressureData.heartbeat);
    }

    // Start updating the chart data at regular intervals
    setInterval(() => {
      this.updateChartData();
    }, 1000);
  }

  updateChartData() {
    // Get new blood pressure data
    const bloodPressureData = this.getBloodPressureData();
    const currentTime = new Date();

    // Remove the first data point and add a new data point at the end
    this.lineChartLabels.shift();
    this.lineChartData[0].data.shift();
    this.lineChartData[1].data.shift();
    this.lineChartData[2].data.shift();
    this.lineChartLabels.push(currentTime.getSeconds().toString());
    this.lineChartData[0].data.push(bloodPressureData.systolic);
    this.lineChartData[1].data.push(bloodPressureData.diastolic);
    this.lineChartData[2].data.push(bloodPressureData.heartbeat);

    this.latestSystolic = bloodPressureData.systolic;
    this.latestDiastolic = bloodPressureData.diastolic;
    this.latestHeartbeat = bloodPressureData.heartbeat;

    // Force an update of the chart
    this.chart.update();  
  }

  getBloodPressureData() {
    // Here you can get the blood pressure data from an external device or generate simulated data
    return {
      systolic: Math.random() * (140 - 90) + 90,
      diastolic: Math.random() * (90 - 60) + 60,
      heartbeat: Math.random() * (100 - 60) + 60,
    };
  }

  goToSync() {
    if(this.activeUser.userType == "main"){
      this.router.navigateByUrl('main-tabs/control/synchronize');
    }
  }
}