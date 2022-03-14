import { Component, OnInit } from '@angular/core';
import { debounce, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-task-management-center',
  templateUrl: './task-management-center.component.html',
  styleUrls: ['./task-management-center.component.scss']
})
export class TaskManagementCenterComponent implements OnInit {

  constructor() {
    const element = document.getElementById("action-container");
    const test = fromEvent(document, 'scroll').pipe(debounce((i) => interval(10)));
    test.subscribe(()=> {
      const ele = document.getElementById("actions")
      if(ele){
        if(document.documentElement.scrollTop > 150){
          ele.style.top = '10px'
        }
        else{
          ele.style.top = '180px'
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
