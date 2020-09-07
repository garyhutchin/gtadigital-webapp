import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReleaseService } from '../../releases/shared/releases.service';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class ReleaseListTileComponent implements OnInit {
    releases:any

    constructor(private router:Router, private releaseService: ReleaseService, private route: ActivatedRoute){

    }

    ngOnInit() {
        this.releases = this.route.snapshot.data['musicReleases']
    }

    viewReleases() {
        this.router.navigate(['music/releases'])
    }
}