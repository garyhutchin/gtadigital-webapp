import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MostPopularService } from '../shared/most-pop.service';

@Component ({
    selector: 'most-popular',
    templateUrl: 'most-popular.component.html',
    styleUrls: ['../../css/card-structure.component.css']
})

export class MostPopularComponent implements OnInit {
    releaseItems:any[]
    podcastItems:any[]

    constructor(private router:Router, private mostPopularService: MostPopularService) {

    }

    ngOnInit() {
        this.releaseItems = this.mostPopularService.getReleaseItems()
        this.podcastItems = this.mostPopularService.getPodcastItems()
    }

    goToGTA20() {
        this.router.navigate(['/releases/gta19'])
    }
}