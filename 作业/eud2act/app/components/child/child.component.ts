import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ShareService } from 'src/app/services/share.service';
//import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 /* @Input() arr;//arr:Array<any> 数组的类型不确定，可以是任意类型
  @Input() arr1;
  @Output() delIndex=new EventEmitter();
  del(i){
    this.delIndex.emit(i);
  }
  index=0;
  log(msg){
    console.log(`这是第${this.index++}次调用,调用的钩子函数是${msg}`);
  }*/
  constructor(private share:ShareService) {
   // this.log("constructor");
    //console.log(this.arr);
   }
  /*ngOnChanges(changes:SimpleChanges):void{
    this.log('ngOnChanges');
    console.log(changes);
    for(let item in changes){//遍历arr1和arr
      console.log(changes[item].currentValue);
      for(let i in changes[item]){//遍历属性名和属性值
        console.log(`属性名是${i},属性值是${changes[item][i]}`);
      }
    }
  }*/
  arr;
  ngOnInit() {
    this.arr=this.share.data;
   // this.log('ngOnInit');
    //console.log(this.arr);
  }
  
  /*ngDoCheck():void{
    this.log('ngDoCheck');
  }
  ngAfterContentChecked():void{
    this.log('ngAfterContentChecked');
  }
  ngAfterContentInit():void{
    this.log('ngAfterContentInit')
  }
  ngAfterViewInit():void{
    this.log('ngAfterViewInit');
  }
  ngAfterViewChecked():void{
    this.log('ngAfterViewInit');
  }*/
  
}
