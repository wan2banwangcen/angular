import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-shequdetail',
  templateUrl: './shequdetail.component.html',
  styleUrls: ['./shequdetail.component.css']
})
export class ShequdetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
  communityId:number;
  community;
  ngOnInit() {
    this.communityId=this.router.snapshot.params['communityId'];
     this.http.get('/api/community/'+this.communityId).subscribe((data)=>{
       console.log(data);
       this.community=data;
     })
  }

}
