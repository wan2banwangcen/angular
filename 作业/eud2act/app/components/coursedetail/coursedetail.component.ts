import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  lessonID:number;
  lesson;
  ngOnInit() {
    this.lessonID=this.router.snapshot.params['lessonId'];
    this.router.params.subscribe((params)=>{
      this.lessonID=params['lessonId'];
    })
    this.http.get('/api/lessons/'+this.lessonID).subscribe((data)=>{
      this.lesson=data;
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
