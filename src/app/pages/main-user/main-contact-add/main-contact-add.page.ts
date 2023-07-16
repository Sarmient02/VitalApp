import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactInfoComponent } from 'src/app/components/contact-info/contact-info.component';

@Component({
  selector: 'app-main-contact-add',
  templateUrl: './main-contact-add.page.html',
  styleUrls: ['./main-contact-add.page.scss'],
})
export class MainContactAddPage implements OnInit {

  @ViewChild(ContactInfoComponent) 
  contactInfo!: ContactInfoComponent;

  contact: any = {
    name: '',
    phone: ''
  };
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      //console.log("add-name: ", params['name']);

      this.contact.name = params['name'];
      this.contact.phone = params['phone'];
    })
  }

  clickedAddContact(): void{
    this.contactInfo.clickedAddContact();
  }
}
