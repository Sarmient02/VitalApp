import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.scss'],
})
export class AlertButtonComponent  implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}

  goToAlert(){
    this.router.navigate(['home/alert']);
  }

}
