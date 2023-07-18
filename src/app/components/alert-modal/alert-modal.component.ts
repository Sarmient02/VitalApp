import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import { ChartService } from 'src/app/services/chart.service';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);
@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent  implements OnInit {

  @Input() latestSystolic: number | undefined;
  @Input() latestDiastolic: number | undefined;
  @Input() latestHeartbeat: number | undefined;

  @Input() valores: string[] = [];

  chart = 'assets/image/descarga.png';

  constructor(
    private modalController: ModalController,
    private chartService: ChartService,
  ) { }

  ngOnInit() {
    
  }
  
  closeModal() {
    this.modalController.dismiss();
  }

}
