import { Component } from '@angular/core';
import { IonicPage,PopoverController,NavController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { AlertController } from 'ionic-angular';
@IonicPage()
@Component({ 
	selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
 export class DashBoard  {
	
  constructor(
    public navCtrl: NavController,
    private popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    ) {
  
  	}
     showRadio() {
    let alert = this.alertCtrl.create();
    // alert.setTitle('');

    alert.addInput({
      type: 'radio',
      label: 'Demo',
      value: 'demo',
      // checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Subscribe',
      value: 'subscribe',
      checked: true
    });

    alert.present();
  }

  	presentPopover(e){
let popover = this.popoverCtrl.create(PopoverPage); 
popover.present({
       ev: e
     
     });
   } 	

	
}
