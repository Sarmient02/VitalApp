import { Component, OnInit } from '@angular/core';
import { Pressure } from 'src/app/services/pressure';

import { PressureHistoryService } from 'src/app/services/pressure-history.service';

@Component({
  selector: 'app-main-pressure-history',
  templateUrl: './main-pressure-history.page.html',
  styleUrls: ['./main-pressure-history.page.scss'],
})
export class MainPressureHistoryPage implements OnInit {

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
