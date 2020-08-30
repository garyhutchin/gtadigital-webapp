import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReleaseService } from '../../releases/shared/releases.service';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['release-list-tile.component.css']
})

export class ReleaseListTileComponent implements OnInit {
    releases:any[]

    constructor(private router:Router, private releaseService: ReleaseService){

    }

    ngOnInit() {
        this.releases = this.releaseService.getReleases()
    }

    viewReleases() {
        this.router.navigate(['music/releases'])
    }
}