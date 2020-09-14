import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class ReleaseListTileComponent implements OnInit {
    releases:any
    musicContent: any

    constructor(private router:Router, private route: ActivatedRoute, private contentService: ContentService) {

    }

    ngOnInit() {
        this.releases = this.route.snapshot.data['musicReleases']

        this.musicContent = this.contentService.getMusicContent('music')
    }

    viewReleases() {
        this.router.navigate(['music/releases'])
    }
}