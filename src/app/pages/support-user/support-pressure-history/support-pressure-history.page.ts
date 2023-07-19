import { Component, OnInit } from '@angular/core';
import { Pressure } from 'src/app/services/pressure';

import { PressureHistoryService } from 'src/app/services/pressure-history.service';

@Component({
  selector: 'app-support-pressure-history',
  templateUrl: './support-pressure-history.page.html',
  styleUrls: ['./support-pressure-history.page.scss'],
})
export class SupportPressureHistoryPage implements OnInit {

  pressures: Pressure[] = [];

  constructor(
    private pressureHistoryService: PressureHistoryService
  ) { }

  ngOnInit() {
    this.pressures = this.getPressureHistory();
  }

  getPressureHistory(){
    return this.pressureHistoryService.getPressures();
  }

}
