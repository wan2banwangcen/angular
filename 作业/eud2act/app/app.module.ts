import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PrentComponent } from './components/prent/prent.component';
import { ChildComponent } from './components/child/child.component';
import { CommonService } from 'src/app/services/common.service';
import { Common2Service } from 'src/app/services/common2.service';
//import {CommonService} from './services/common.service'
//引入路由
import {RouterModule,Router} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { HeaderComponent } from './components/header/header.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
import { HomecourseComponent } from './components/homecourse/homecourse.component';
import { HometongbuComponent } from './components/hometongbu/hometongbu.component';
import { HomeqieshuoComponent } from './components/homeqieshuo/homeqieshuo.component';
import { HometongzhiComponent } from './components/hometongzhi/hometongzhi.component';

@NgModule({
  declarations: [
    AppComponent,
    PrentComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    HeaderComponent,
    ShequComponent,
    TongbudetailComponent,
    CoursedetailComponent,
    ShequdetailComponent,
    HomecourseComponent,
    HometongbuComponent,
    HomeqieshuoComponent,
    HometongzhiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:lessonId',component:CoursedetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:communityId',component:ShequdetailComponent},     
      {path:'home/tongbu',component:HometongbuComponent},
      {path:'home/course',component:HomecourseComponent},
      {path:'home/qieshuo',component:HomeqieshuoComponent},
      {path:'home/tongzhi',component:HometongzhiComponent},      
    ]),//路由
    HttpClientModule
  ],
  providers: [],//[CommonService],//{provide:CommonService,useClass:Common2Service}
  bootstrap: [AppComponent],
})
export class AppModule { }
