import { Component, ViewChild } from '@angular/core';
import {  Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

// import { DataProvider } from '../providers/data/data';
// import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private screenOrientation:ScreenOrientation, public statusBar: StatusBar, public splashScreen: SplashScreen) {
     
           
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
      //console.log(this.screenOrientation.type);
      //this.screenOrientation.lock('landscape');
      // if(!localStorage.getItem( '' )) {
      //       this.rootPage = HomePage;
      //   }


    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
// ionicBootstrap(MyApp);