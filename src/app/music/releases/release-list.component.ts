import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['release-list.component.css']
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