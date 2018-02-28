import { Injectable } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { DashBoard } from '../../pages/dashboard/dashboard';

@Injectable()
export class DataProvider {
	rootPage = LoginPage;
  token;
  userData;
  constructor() {
  }

  setToken(sessionToken){
    this.token = sessionToken;
    
  }
  setUser(message){
    this.userData = message[0];
  }


  setRootPage(root){
  	var newRoot = {
  		'login':LoginPage,
  		'dashboard':DashBoard
  	}
  	this.rootPage = newRoot[root];
  }

}
