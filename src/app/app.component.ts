import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
declare var ZohoSalesIQ: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        ZohoSalesIQ.init(
          'S7cytWoW1CfYLWYDlRaNeXBZyv%2Bg0OFOXLX2VDj2uVvxCcEbaHGKsg%3D%3D',
          'guIVycIWDgdcPqwTIB9mBVDHkm6UIBdIhxlmFcC45jXLbKfkqjaWNvM4csFQVU%2BM1fCjAjeoelT9s1O23AGLY8CJKIWXeetzggSsIitmrshdXVf3QALGBWhIHAcmGR17JExzfn%2B6gES4h1NkKO3712mT93FTyJss'
        );
      } 
      else {
        ZohoSalesIQ.init(
          'S7cytWoW1CfYLWYDlRaNeXBZyv%2Bg0OFOXLX2VDj2uVvxCcEbaHGKsg%3D%3D',
          'guIVycIWDgdcPqwTIB9mBVDHkm6UIBdIhxlmFcC45jXLbKfkqjaWNvM4csFQVU%2BMYGT78VUSiRY4ewxJqheeLLWmtyQjzdr6B12JxQw4ZyFdXVf3QALGBWhIHAcmGR17JExzfn%2B6gES4h1NkKO3712mT93FTyJss'
        );
      }
    });
    ZohoSalesIQ.showLauncher(true);
  }
}
