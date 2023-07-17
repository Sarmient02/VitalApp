import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/services/contacto';

@Component({
  selector: 'app-main-contact-edit',
  templateUrl: './main-contact-edit.page.html',
  styleUrls: ['./main-contact-edit.page.scss'],
})
export class MainContactEditPage implements OnInit {

  contact: any = {
    name: '',
    phone: ''
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const contacto = params;
    })
  }

  editPressedContact(contacto: Contacto){

  }
}
