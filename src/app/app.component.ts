import { Component, ViewChild } from '@angular/core';
import { PopoverController,Nav,NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { LoginPage } from '../pages/login/login';
import { LoadoutPage } from '../pages/loadout/loadout';
import { SubscribePage } from '../pages/subscribe/subscribe';
// import { DataProvider } from '../providers/data/data';
// import { ListPage } from '../pages/list/list';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController
  rootPage: any = LoginPage;
    pages: Array<{title: string, component: any}>;
      constructor(
      private popoverCtrl: PopoverController,
      public platform: Platform,
      private screenOrientation:ScreenOrientation,  
      public statusBar: StatusBar, 
      public splashScreen: SplashScreen,
    
     ) {
     this.initializeApp();
  // used for an example of ngFor and navigation
    this.pages = [
       ];
     }
  initializeApp() {
    // this.rootPage = this.data.rootPage;
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // console.log(this.screenOrientation.type);
      // this.screenOrientation.lock('landscape');
      // if(!localStorage.getItem( '' )) {
      //       this.rootPage = DashBoard;
      //   }
    });
  }
// openPage(page) {
//     // Reset the content nav to have just this page
//     // we wouldn't want the back button to show in this scenario
//      this.nav.setRoot(page.component);
//     } 
goToDashBoard()
    {
  }
    goToSubscribe()
    {
  this.nav.push(SubscribePage);
  }
}