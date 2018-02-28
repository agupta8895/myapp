import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
 
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  goToProfile(){
  	this.navCtrl.push(ProfilePage);

  }
   goToLogout(){
  	this.navCtrl.push(LoginPage);
  	
  }
  

}
