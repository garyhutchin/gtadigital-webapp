import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

    constructor(private router: Router, private contentService: ContentService, private podcastService: PodcastService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.contentService.getMusicPageContent().subscribe(musicPageContent => {
            this.musicContent = musicPageContent
        })

        this.podcasts = this.activatedRoute.snapshot.data['podcastList']       
    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}