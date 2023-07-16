import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-contact-add',
  templateUrl: './main-contact-add.page.html',
  styleUrls: ['./main-contact-add.page.scss'],
})
export class MainContactAddPage implements OnInit {

  contact: any;
  name!: string;
  phone!: number;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params['name']);
      
      const name = params['name'];
      const phone = params['phone'];
      if (name && phone) {
        this.name = name;
        this.phone = phone;
      }
    })
  }
}
