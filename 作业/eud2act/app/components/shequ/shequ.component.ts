import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private http:HttpClient) { }
  communityID:number;
  communitys;
  ngOnInit() {
    this.communityID=this.router.snapshot.params['communityID'];
    this.router.params.subscribe((params)=>{
      this.communityID=params['communityID'];
    })
    this.http.get('/api/community').subscribe((data)=>{
      this.communitys=data;
    })
     
  }

}
export class community{
  constructor(
          public id:number,
          public lessonName:string,
          public image1:string,
          public image2:string,
          public introduce:string,
          public author:string,
          public hour:string,
          public read:number,
          public suggection:number
      ){}
}
