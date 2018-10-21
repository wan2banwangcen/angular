import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseID:number;
  courses;
  ngOnInit() {
    this.courseID=this.router.snapshot.params['courseID'];//courseID是app.module中定义的变量
    this.router.params.subscribe((params)=>{
      this.courseID=params['courseID'];
    })
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    })
  }
  // go(){
  //   this.route.navigate(['/tongbu','bbb'],{queryParams:{id:'www'}});//组件之间的切换
  // }
}
export class Course{
  constructor(
          public id:number,
          public courseName:string,
          public images:string,
          public task:number,
          public person:number
      ){}
}
