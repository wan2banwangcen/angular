import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';
import { AddPage } from '../add/add';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root=APage;
  tab4Root=BPage;
  constructor(public modalCtrl:ModalController) {

  }
  ionViewDidLoad(){
      document.querySelector('#tab-t0-2').addEventListener('click',()=>{
        let profileModal=this.modalCtrl.create(AddPage);
        profileModal.present();
      },false);
  }
}
