import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { DashBoard } from '../pages/dashboard/dashboard';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { PopoverPage } from '../pages/popover/popover';
import { ProfilePage } from '../pages/profile/profile';
import { LoadoutPage } from '../pages/loadout/loadout';
import { SubscribePage } from '../pages/subscribe/subscribe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MasterhttpProvider } from '../providers/masterhttp/masterhttp';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    DashBoard,
    ListPage,
    LoginPage,
    PopoverPage,
    ProfilePage,
    LoadoutPage,
    SubscribePage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashBoard,
    ListPage,
    LoginPage,
    PopoverPage,
    ProfilePage,
    LoadoutPage,
    SubscribePage,
  ],
  providers: [
    StatusBar,
    DataProvider,
    SplashScreen,
    ScreenOrientation,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MasterhttpProvider,
    
  ]
})
export class AppModule {}
