import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PodcastService } from '../../podcasts/shared/podcast.service'
import { ContentService } from 'src/app/shared/content.service';

@Component ({
    selector: 'podcast-tile',
    templateUrl: 'podcast-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class PodcastTileComponent implements OnInit {
    
    podcasts:any[]
    musicContent:any

    constructor(private router: Router, private podcastService: PodcastService, private contentService: ContentService) {

    }

    ngOnInit() {
        this.podcasts = this.podcastService.getPodcasts()

        this.musicContent = this.contentService.getMusicContent('music')
    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}