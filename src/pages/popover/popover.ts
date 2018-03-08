import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { IonicPage, Nav, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
 
})
export class PopoverPage implements OnInit{
  user;
  logoutUrl:string;
  headers;
  loginResponse;
  constructor(
    public data: DataProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,

    ) {
  }
      goToProfile(){
      	this.navCtrl.push(ProfilePage);
        }
  setQueryHeaders(){
        this.headers = new Headers();
        this.headers.append('session_token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdwYW50Yml6QGdtYWlsLmNvbSIsImlhdCI6MTUwNzk3NzcwNSwiZXhwIjoyMjk2Mzc3NzA1fQ.fZT3uDWGjcYM_a-jVuhrrhY1Hl3djtVhUhYW2ENgTn4');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Olympiadbox-Api-Key', '36fda24fe5588fa4cdf23xxss226c6c2fdfbdb6b6bc7864699774c9jh790f706d05a88');
         }
    ngOnInit(){
   // this.loginUrl = 'http://scripts.olympiadbox.com/services/fronty-api/user/login';
   this.logoutUrl = 'http://scripts.olympiadbox.com/services/fronty-api/user/logout';
    this.user = {
      user_info_id: this.data.userData.user_info.user_info_id
    }
    console.log(this.data.userData);
    this.setQueryHeaders();
       } 
     goToLogout(){
        this.http.post(this.logoutUrl, this.user, {headers:this.headers})
         .map((resp:Response)=>resp.json()).subscribe((data)=>{
          if(data['status']==200){
            this.data.setToken(data['null']);
            this.data.setUser(data['null']);
            this.navCtrl.pop();
            this.navCtrl.setRoot(LoginPage);
         }
      
  })
      }
  ionViewDidLoad() {
    }
}
          
    

