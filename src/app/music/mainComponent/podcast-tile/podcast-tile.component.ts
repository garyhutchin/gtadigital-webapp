import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PodcastService } from '../../podcasts/shared/podcast.service'

@Component ({
    selector: 'podcast-tile',
    templateUrl: 'podcast-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class PodcastTileComponent implements OnInit {
    
    podcasts:any[]

    constructor(private router: Router, private podcastService: PodcastService) {

    }

    ngOnInit() {
        this.podcasts = this.podcastService.getPodcasts()
    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}