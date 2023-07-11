import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent  implements OnInit {

  constructor(private location: Location) { }

  @Input() title = 'Inicio';
  
  ngOnInit() {}

  myBackButton() {
    this.location.back();
    console.log(this.location.back);
  }
}
