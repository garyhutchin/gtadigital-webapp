import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['release-list-tile.component.css']
})

export class ReleaseListTileComponent {
    
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