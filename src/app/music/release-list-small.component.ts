import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'release-list-small',
    templateUrl: 'release-list-small.component.html',
    styleUrls: ['release-list-small.component.css']
})

export class ReleaseListSmallComponent {
    
    constructor(private router:Router){

    }

    viewReleases() {
        this.router.navigate(['/releases'])
    }

    goToGTA19() {
        this.router.navigate(['/releases/gta19'])
    }

    goToGTA18() {
        this.router.navigate(['/releases/gta18'])
    }
}