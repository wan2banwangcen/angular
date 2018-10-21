import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service'
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-prent',
  templateUrl: './prent.component.html',
  styleUrls: ['./prent.component.css'],
  //providers:[CommonService]
})
export class PrentComponent implements OnInit {
  constructor(private share:ShareService,private local:CommonService) { }
  add(){
    this.share.add(100);
  }
  data=[1,2,3,4,5,6];
  data1;
  //txt:string="边伯贤";
  //txe:string="吴世勋";
  del(i){
    this.data1.splice(i,1);
    this.local.set("list",this.data1);

  }
  ngOnInit() {
   // setInterval(()=>{
   //   this.data.push(2);
  //  },1000);
  if(this.local.get('list')){
    this.data1=this.local.get('list').split(',');
  }else{
    this.data1=[1,2,3,4,5,6,7];
  }
  }

}
