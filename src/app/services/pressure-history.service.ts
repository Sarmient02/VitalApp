import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pressure } from './pressure';

@Injectable({
  providedIn: 'root'
})
export class PressureHistoryService {

  pressures: Pressure[] = [
    {
      "id": 1,
      "date": "01-07-2023",
      "heartbeat": 75,
      "systolic": 120,
      "diastolic": 80
    },
    {
      "id": 2,
      "date": "02-07-2023",
      "heartbeat": 80,
      "systolic": 122,
      "diastolic": 78
    },
    {
      "id": 3,
      "date": "03-07-2023",
      "heartbeat": 76,
      "systolic": 118,
      "diastolic": 82
    },
    {
      "id": 4,
      "date": "04-07-2023",
      "heartbeat": 82,
      "systolic": 124,
      "diastolic": 81
    },
    {
      "id": 5,
      "date": "05-07-2023",
      "heartbeat": 78,
      "systolic": 120,
      "diastolic": 79
    },
    {
      "id": 6,
      "date": "06-07-2023",
      "heartbeat": 74,
      "systolic": 116,
      "diastolic": 80
    },
    {
      "id": 7,
      "date": "07-07-2023",
      "heartbeat": 79,
      "systolic": 122,
      "diastolic": 76
    },
    {
      "id": 8,
      "date": "08-07-2023",
      "heartbeat": 81,
      "systolic": 126,
      "diastolic": 79
    },
    {
      "id": 9,
      "date": "09-07-2023",
      "heartbeat": 77,
      "systolic": 118,
      "diastolic": 83
    },
    {
      "id": 10,
      "date": "10-07-2023",
      "heartbeat": 75,
      "systolic": 116,
      "diastolic": 80
    },
    {
      "id": 11,
      "date": "11-07-2023",
      "heartbeat": 79,
      "systolic": 120,
      "diastolic": 78
    },
    {
      "id": 12,
      "date": "12-07-2023",
      "heartbeat": 82,
      "systolic": 122,
      "diastolic": 81
    },
    {
      "id": 13,
      "date": "13-07-2023",
      "heartbeat": 78,
      "systolic": 120,
      "diastolic": 79
    },
    {
      "id": 14,
      "date": "14-07-2023",
      "heartbeat": 75,
      "systolic": 116,
      "diastolic": 81
    },
    {
      "id": 15,
      "date": "15-07-2023",
      "heartbeat": 80,
      "systolic": 124,
      "diastolic": 78
    },
    {
      "id": 16,
      "date": "16-07-2023",
      "heartbeat": 76,
      "systolic": 122,
      "diastolic": 75
    },
    {
      "id": 17,
      "date": "17-07-2023",
      "heartbeat": 78,
      "systolic": 120,
      "diastolic": 77
    },
    {
      "id": 18,
      "date": "18-07-2023",
      "heartbeat": 79,
      "systolic": 124,
      "diastolic": 76
    }
  ]

  ID = 18;

  pressureChanged = new Subject<Pressure[]>();

  getPressures(): Pressure[] {
    return this.sortPressures(this.pressures);
  }

  getNewID(): number {
    this.ID = this.ID + 1;
    return this.ID;
  }

  sortPressures(presiones: Pressure[]): Pressure[] {
    return presiones.sort((a, b) => {
      const dateA = a.date.split('-').reverse().join('-');
      const dateB = b.date.split('-').reverse().join('-');
      return new Date(dateB).getTime()- new Date(dateA).getTime() ;
    });
    
  }    

  addPressure(pressure: Pressure): void {
    console.log("creating new pressure record: ", pressure)
    pressure.id = this.getNewID();
    this.pressures.push(pressure);
    this.pressureChanged.next(this.sortPressures(this.pressures));
  }


  constructor() { }
}
