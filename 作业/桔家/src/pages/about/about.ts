import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isActive=true;
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {

  }

}
