import { Component } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component({
    selector: 'latest-news',
    templateUrl: 'latest-news.component.html',
    styleUrls: ['latest-news.component.css'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
              style({ opacity: 0 }), animate('0.5s ease-in', style({ opacity: 1 }))]
            ),
            transition(':leave',
              [style({ opacity: 1 }), animate('0.2s ease-out', style({ opacity: 0 }))]
            )
          ])
    ]
})

export class LatestNewsComponent {
    
    btn1DefaultStatus = 'Expand';
    btn2DefaultStatus = 'Expand';

    isCollapsed1: boolean = true;    
    
    toggleCollapse1() {
        this.isCollapsed1 = !this.isCollapsed1;

        if (!this.isCollapsed1)
        return this.btn1DefaultStatus = 'Collapse'
        
        if (this.isCollapsed1)
        return this.btn1DefaultStatus = 'Expand'
    }

    isCollapsed2: boolean = true;    
    
    toggleCollapse2() {
        this.isCollapsed2 = !this.isCollapsed2;

        if (!this.isCollapsed2)
        return this.btn2DefaultStatus = 'Collapse'
        
        if (this.isCollapsed2)
        return this.btn2DefaultStatus = 'Expand'
    }
}