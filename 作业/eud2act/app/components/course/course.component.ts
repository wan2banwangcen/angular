import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  lessonID:number;
  lessons;
  ngOnInit() {
    this.lessonID=this.router.snapshot.params['lessonID'];
    this.router.params.subscribe((params)=>{
      this.lessonID=params['lessonID'];
    })
    this.http.get('/api/lessons').subscribe((data)=>{
      this.lessons=data;
    })
  }

}
export class Lesson{
  constructor(
          public id:number,
          public lessonName:string,
          public images:string,
          public introduce:string,
          public hour:number,
          public person:number,
          public video:string,
          public kecheng:string,
          public shuoming:string,
          public jieshao:string
      ){}
}
