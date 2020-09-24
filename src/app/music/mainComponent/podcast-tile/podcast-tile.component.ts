import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { PodcastService } from '../../podcasts/shared/podcast.service';

@Component ({
    selector: 'podcast-tile',
    templateUrl: 'podcast-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css', '../../../css/main-structure.component.css']
})

export class PodcastTileComponent implements OnInit {
    
    musicContent: any
    podcasts:any

    constructor(private router: Router, private contentService: ContentService, private podcastService: PodcastService) {

    }

    ngOnInit() {
        this.musicContent = this.contentService.getMainContent('music')
        this.podcasts = this.podcastService.getPodcasts()        
    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}