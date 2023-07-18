import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent  implements OnInit {

  @Output()
  configEvent: EventEmitter<any> = new EventEmitter<any>();

  userId!: number;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  @Input() title = 'Inicio';

  @Input() ruta = 'home';
  
  ngOnInit(
  ) {}

  myBackButton() {
    this.router.navigate([this.ruta]);
  }

  clickedConfig(){
    this.router.navigate(['main-tabs/home/config']);
  }
}
