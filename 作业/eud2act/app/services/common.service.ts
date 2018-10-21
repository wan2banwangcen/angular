import { Injectable } from '@angular/core';

@Injectable({//可注入的
  providedIn: 'root'
})
export class CommonService {//只能声明方法，声明属性

  constructor() { }
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
}
