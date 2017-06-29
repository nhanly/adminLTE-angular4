import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../services/base-service';
declare var $:any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    providers: [BaseService]
})
export class SidebarComponent implements OnInit {
    isActive = false;
    showMenu = '';
    sideBarMenu = [];
    constructor( private baseService: BaseService) { }

    ngOnInit() {
        this.initData();
    }
    initData() {
        this.baseService.getData().then(
        (data) => {
            this.sideBarMenu = data;
        }
    );
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
