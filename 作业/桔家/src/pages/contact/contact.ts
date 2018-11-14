import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){//弹出框
    let profileModal=this.modalCtrl.create(AddPage);
    profileModal.present();
  }
}
