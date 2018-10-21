import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  courseId:number;
  course;
  ngOnInit() {
    // this.courseId=this.router.snapshot.params['courseId'];
    // this.http.get('/api/courses/'+this.courseId).pipe(map((data)=>{//data就是被观察对象中的data
    //   data.name='bianboxian';
    //   return data;
    // })).pipe(filter(data=>{
    //  return data.id==3;
    // })).subscribe((data)=>{
    //   console.log(data);
    //   this.course=data;
    // })
     this.courseId=this.router.snapshot.params['courseId'];
     this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
       this.course=data;
     })
  }

}
