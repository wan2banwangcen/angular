import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { LogService } from 'src/app/services/log.service';


@Injectable({
  providedIn: 'root'
})
export class Common2Service implements CommonService{

  constructor(private log:LogService) { }
  set(key,value){
    this.log.log('set');
    localStorage.setItem(key,value);
  }
  get(key){
    this.log.log('get方法调用了');
    return localStorage.getItem(key);
  }
}
