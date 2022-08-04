import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
declare var ZohoSalesIQ: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
  }

  ionViewWillEnter(){
      console.log("HOME PAGE IN");
      ZohoSalesIQ.showLauncher(true);
  }

  ngOnInit() {
  }

}
