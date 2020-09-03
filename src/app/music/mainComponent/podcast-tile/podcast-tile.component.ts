import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'podcast-tile',
    templateUrl: 'podcast-tile.component.html',
    styleUrls: ['podcast-tile.component.css']
})

export class PodcastTileComponent {

    constructor(private router: Router) {

    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}