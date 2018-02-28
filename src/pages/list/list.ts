import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
 
  
  
  
