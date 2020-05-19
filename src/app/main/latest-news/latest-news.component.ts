import { Component } from '@angular/core';

@Component({
    selector: 'latest-news',
    templateUrl: 'latest-news.component.html',
    styleUrls: ['latest-news.component.css']
})

export class LatestNewsComponent {
    
    btn1DefaultStatus = 'Track List';
    btn2DefaultStatus = 'Track List';

    isCollapsed1: boolean = true;    
    
    toggleCollapse1() {
        this.isCollapsed1 = !this.isCollapsed1;

        if (!this.isCollapsed1)
        return this.btn1DefaultStatus = 'Close'
        
        if (this.isCollapsed1)
        return this.btn1DefaultStatus = 'Track List'
    }

    isCollapsed2: boolean = true;    
    
    toggleCollapse2() {
        this.isCollapsed2 = !this.isCollapsed2;

        if (!this.isCollapsed2)
        return this.btn2DefaultStatus = 'Close'
        
        if (this.isCollapsed2)
        return this.btn2DefaultStatus = 'Track List'
    }
}