import { Component } from '@angular/core';

@Component({//装饰器函数
  selector: 'app-root',
  templateUrl: './app.component.html',//只能引入一个模板
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  txt:string;
  arr:string[]=[];//创建一个数组
  arr1:string[]=[];
  foo(e){
    //event.keyCode按的建的代码，13表示回车
    //keycode  13 = Enter
    if(e.keyCode==13){
      this.arr.push(this.txt);
      console.log(this.arr);
      this.txt='';
    }
  }
  del(idx:number){
    this.arr.splice(idx,1);
  }
  change(idx){
    this.arr1.push(this.arr[idx]);
    this.arr.splice(idx,1);
    //let ele=this.arr.splice(idx,1);//删除后返回的是一个数组
    //this.arr1.push(ele[0]);
  }
  del2(idx:number){
    this.arr1.splice(idx,1);
  }
}*/
export class AppComponent{
  txt:string;
  arr:Msg[]=[];//数组为对象类型
  counter:number=0;
  getValue(e){
    if(e.keyCode==13){
      //this.arr.push({title:this.txt,done:false});
      this.arr.push(new Msg(this.txt,false));
      this.txt='';
      this.count();
    }
  }
  delete(idx){
    this.arr.splice(idx,1);
  }
  count(){
    this.counter=0;
    this.arr.forEach((value,index)=>{
      if(value.done){
        this.counter++;
      }
    })
  }
  change(idx){
    this.arr[idx].done=!this.arr[idx].done;
    this.count();
  }
}

class Msg{  //erport 如果在别的文件中也用到这个类，要加上export
  constructor(public title:string,public done:boolean){
  }
}


