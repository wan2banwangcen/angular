import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private local:CommonService) { }

  
  @Input() arr;
  @Input() arr1;
  del1(idx){
    this.arr.splice(idx,1);
    //this.local.set("list1",this.arr);
  }
  del2(idx){
    this.arr1.splice(idx,1);
    //this.local.set("list2",this.arr1);
  }
  change1(idx){
    this.arr1.unshift(this.arr[idx]);
    this.arr.splice(idx,1);
    //this.local.set("list1",this.arr);
  }
  change2(idx){
    this.arr.unshift(this.arr1[idx]);
    this.arr1.splice(idx,1);
    //this.local.set("list2",this.arr1);
  }
  ngOnInit() {
    /*if(this.local.get("list1") && this.local.get("list2")){
      this.arr=this.local.get("list1").split(",");
      this.arr1=this.local.get("list2").split(",");
    }
    else{
      this.arr=[];
      this.arr1=[];
    }*/
  }
}
