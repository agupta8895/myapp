import { Component , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { DashBoard } from '../../pages/dashboard/dashboard';
import { DataProvider } from '../../providers/data/data';
@IonicPage()
@Component({
  selector: 'page-loadout',
  templateUrl: 'loadout.html',
})
export class LoadoutPage implements OnInit{
profileUrl:string;
	headers;
	profileResponse;
  constructor(
  	public data: DataProvider,
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private toastCtrl: ToastController,
  	private http: Http

) {}
  setQueryHeaders(){
        this.headers = new Headers();
        this.headers.append('session_token', this.data.token);
        this.headers.append('Olympiadbox-Api-Key', '36fda24fe5588fa4cdf23xxss226c6c2fdfbdb6b6bc7864699774c9jh790f706d05a88');
  }
  	ngOnInit(){
	 this.profileUrl = 'http://scripts.olympiadbox.com/services/fronty-api/user/profile';
		this.setQueryHeaders();
				this.profile();
  }
  profile(){
	   this.http.get(this.profileUrl, {headers:this.headers})
	   .map((resp:Response)=>resp.json()).subscribe((data)=>{
	   	if (data['status']==200){
	    	this.data.setUser(data['message']);
	    	// this.navCtrl.setRoot(DashBoard)
		}
			else {
      		this.showToast();
      	}
      	 })
    // })
  }
  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Invaild data',
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadoutPage');
  }

}
