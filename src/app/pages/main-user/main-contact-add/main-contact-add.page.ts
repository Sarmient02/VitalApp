import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-contact-add',
  templateUrl: './main-contact-add.page.html',
  styleUrls: ['./main-contact-add.page.scss'],
})
export class MainContactAddPage implements OnInit {

  contact: any = {
    name: '',
    phone: ''
  };
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log("add-name: ", params['name']);

      this.contact.name = params['name'];
      this.contact.phone = params['phone'];
    })
  }
}
