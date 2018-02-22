import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

// import { DataProvider } from '../../providers/data/data';
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
  	// public data:DataProvider,
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	private http: Http,
  	public alertCtrl: AlertController
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
  		username:null,
  		password:null
  	}
  	this.setQueryHeaders();
  }

  login(){
    this.http.post(this.loginUrl, this.user, {headers:this.headers})
    .map((resp:Response)=>resp.json()).subscribe((data)=>{
    	
    	if (data['status']==200){
    		this.navCtrl.push(HomePage);
    		// this.data.setRootPage('login');
    	}
    	else {
    		this.showAlert();
    	}
    })
  }
  showAlert() {
    let alert = this.alertCtrl.create({
     title: 'error!',
     
    });
    alert.present();
  }
  ionViewDidLoad() {
  }

}
