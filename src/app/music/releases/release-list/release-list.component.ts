import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';
import { ActivatedRoute } from '@angular/router'

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['release-list.component.css']
})

export class ReleaseListComponent implements OnInit {
    releases:any

    constructor(private releaseService: ReleaseService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.releases = this.route.snapshot.data['releases']
    }

}