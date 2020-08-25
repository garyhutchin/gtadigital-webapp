import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['release-list.component.css'],
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

export class ReleaseListComponent {
    btnDefaultStatus = 'View All';
    isCollapsed: boolean = true;
    
    constructor(private router:Router) {
        
    }
    
    toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
        
        if (!this.isCollapsed)
        return this.btnDefaultStatus = 'Close'
        
        if (this.isCollapsed)
        return this.btnDefaultStatus = 'View All'
    }

    goToGTA19() {
        this.router.navigate(['/releases/gta19'])
    }

    goToGTA18() {
        this.router.navigate(['/releases/gta18'])
    }

}