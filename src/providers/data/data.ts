import { Injectable } from '@angular/core';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
	rootPage = LoginPage
  constructor() {
    console.log('Hello DataProvider Provider');
  }

  setRootPage(root){
  	var newRoot = {
  		'login':LoginPage,
  		'home':HomePage
  	}
  	this.rootPage = newRoot[root];
  	console.log(this.rootPage)
  }

}
