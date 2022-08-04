import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var ZohoSalesIQ: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() {
  }

  ionViewWillEnter(){
      console.log("ABOUT PAGE IN");
      ZohoSalesIQ.showLauncher(false);
  }

  ngOnInit() {
  }

}
