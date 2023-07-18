import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent  implements OnInit {

  constructor(private location: Location,
    private route: Router) { }

  @Input() title = 'Inicio';

  @Input() ruta = 'home';
  
  ngOnInit() {}

  myBackButton() {
    this.route.navigate([this.ruta]);
  }
}
