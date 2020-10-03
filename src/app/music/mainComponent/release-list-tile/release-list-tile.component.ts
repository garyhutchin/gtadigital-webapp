import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { ReleaseService } from '../../releases/shared/releases.service';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css', '../../../css/main-structure.component.css', '../../../css/features.component.css']
})

export class ReleaseListTileComponent implements OnInit {
   
    musicContent: any
    releases: any
    isFetching: boolean = false;
    error = null;

    constructor(private router:Router, private route: ActivatedRoute, private contentService: ContentService, private releaseService: ReleaseService) {

    }

    ngOnInit() {
        
        this.contentService.getMusicPageContent().subscribe(musicPageContent => {
            this.musicContent = musicPageContent
        })

        this.isFetching = true;
        this.releaseService.getReleases().subscribe(releaseItems => {
            this.isFetching = false;
            this.releases = releaseItems
        })
    }

    viewReleases() {
        this.router.navigate(['music/releases'])
    }
}