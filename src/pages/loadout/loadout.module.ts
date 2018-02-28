import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadoutPage } from './loadout';

@NgModule({
  declarations: [
    LoadoutPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadoutPage),
  ],
})
export class LoadoutPageModule {}
