import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import * as constants from '../../config/constants';
import 'rxjs/add/operator/map';

/*
Generated class for the MasterhttpProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class MasterhttpProvider {
	headers;
	constructor(private http:Http) {}

login(requestBody){
 	this.headers = new Headers();
	this.headers.append('Content-Type', 'application/json');
	this.headers.append('Olympiadbox-Api-Key', constants.OLYMPIADBOX_API_KEY);
 
 	return this.http.post(constants.OLYMPIADBOX_URL + "user/login", requestBody, {headers:this.headers})
}

}
