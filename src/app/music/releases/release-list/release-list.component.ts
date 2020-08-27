import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['release-list.component.css']
})

export class ReleaseListComponent implements OnInit {
    releases:any[]

    constructor(private releaseService: ReleaseService) {
    }

    ngOnInit() {
        this.releases = this.releaseService.getReleases()
    }

}