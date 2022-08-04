import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var ZohoSalesIQ: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() {
  }

  ionViewWillEnter(){
      console.log("CONTACT PAGE IN");
      ZohoSalesIQ.showLauncher(false);
  }

  ngOnInit() {
  }

}
