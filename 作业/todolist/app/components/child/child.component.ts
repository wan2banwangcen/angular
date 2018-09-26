import { Component, OnInit,Input,Output,EventEmitter,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  txt:string;
  @Output() txtOut=new EventEmitter();
  msg(e){
    if(e.keyCode==13){
      this.txtOut.emit(this.txt);
      this.txt='';
    }
  }
}
