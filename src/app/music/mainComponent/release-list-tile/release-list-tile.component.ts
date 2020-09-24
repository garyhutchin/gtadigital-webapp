import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { ReleaseService } from '../../releases/shared/releases.service';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css', '../../../css/main-structure.component.css']
})

export class ReleaseListTileComponent implements OnInit {
   
    musicContent: any
    releases: any

    constructor(private router:Router, private route: ActivatedRoute, private contentService: ContentService, private releaseService: ReleaseService) {

    }

    ngOnInit() {
        
        this.musicContent = this.contentService.getMainContent('music')
        this.releases = this.releaseService.getReleases()
    }

    viewReleases() {
        this.router.navigate(['music/releases'])
    }
}