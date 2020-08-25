import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'most-popular',
    templateUrl: 'most-popular.component.html',
    styleUrls: ['most-popular.component.css']
})

export class MostPopularComponent {
    constructor(private router:Router) {

    }
    goToGTA20() {
        this.router.navigate(['/releases/gta19'])
    }
}