import { Component, OnInit,OnDestroy} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';//HttpClient是一个类，HttpClientModule是一个模块


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor(private http:HttpClient) { }
  //timer=null;
  course;
  headers=new HttpHeaders({});
  ngOnInit() {
    // this.timer=setInterval(function(){
    //   console.log("吴世勋");
    // },1000)
    //get里边的第一个参数就是请求的地址
    // this.http.get('/api/courses/1').subscribe((data)=>{
    //   this.course=data;
    //   console.log(data);
    // });//subscribe订阅这个对象
    this.http.post('/api',{name:'lll',pwd:920506},{headers:this.headers}).subscribe((data)=>{
      console.log(data);
    });
    // this.http.get('/api/lessons/1').subscribe((data)=>{
    //      this.course=data;
    //      console.log(data);
    //   });
  }
  ngOnDestroy():void{
    // console.log("边伯贤");
    // clearInterval(this.timer);
  }
}
