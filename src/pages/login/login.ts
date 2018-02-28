import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { IonicPage, Nav,NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { DashBoard } from '../dashboard/dashboard';
import { LoadoutPage } from '../loadout/loadout';

//import { MasterhttpProvider } from '../../providers/masterhttp/masterhttp';
import { DataProvider } from '../../providers/data/data';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
   
})
export class LoginPage implements OnInit {
	user;
	loginUrl:string;
	headers;
	loginResponse;
  constructor(
  	public data:DataProvider,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private toastCtrl: ToastController,
    private http: Http,
    // public loadout: LoadoutPage
  	) {
  }
   setQueryHeaders(){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Olympiadbox-Api-Key', '36fda24fe5588fa4cdf23xxss226c6c2fdfbdb6b6bc7864699774c9jh790f706d05a88');
  }

  ngOnInit(){
	 this.loginUrl = 'http://scripts.olympiadbox.com/services/fronty-api/user/login';
  	this.user = {
  		username:'agupta8895@gmail.com',
  		password:'akanksha@'
  	}

    this.setQueryHeaders();
  }

  login(){
   this.http.post(this.loginUrl, this.user, {headers:this.headers})
    .map((resp:Response)=>resp.json()).subscribe((data)=>{
      	if (data['status']==200){
          this.data.setToken(data['session_token']);
          this.navCtrl.push(LoadoutPage);
           // this.navCtrl.push(DashBoard);
        
      	}
      	else {
      		this.showToast();
      	}
    })
    // })
  }
  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Unauthorized User',
      duration: 2000,
      position: 'middle'
    });

    toast.present(toast);
  }
  ionViewDidLoad() {
  }

}
