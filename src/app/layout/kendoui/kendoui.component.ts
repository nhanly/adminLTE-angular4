import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { State } from '@progress/kendo-data-query';
import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'kendoui-grid',
  templateUrl: './kendoui.component.html',
  styleUrls: ['./kendoui.component.scss']
})


export class KendouiComponent implements OnInit {
  public view: Array<object> = new Array();
  constructor() { 
  }

  ngOnInit() {
    this.view = [{
              id: 1,
              name: 'Alex Ryder',
              desc: 'Hehe'
            },
            {
              id: 2,
              name: 'Alex Ryder 2',
              desc: 'Hehe Hehe'
            },
            {
              id: 1,
              name: 'Alex Ryder 3',
              desc: 'Hehe Hehe Hehe'
            }] ;
  } 
}

// export class KendoGridService extends BehaviorSubject<GridDataResult> {

//     constructor(private http: Http, private tableName: string) {
//         super(null);
//     }

//     public query(state: any): void {
//         this.getData(this.tableName, state)
//             .subscribe(x => super.next(x));
//     }

//     public getData(tableName: string, state: any): Observable<GridDataResult> {
//         let data = <GridDataResult>{
//           total: 1,
//           data: [
//             {
//               id: 1,
//               name: 'Alex Ryder',
//               desc: 'Hehe'
//             }
//           ]  
//         };
//         return Observable.create(data);
//     }
// }


