import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ReleaseService } from './shared/releases.service';

@Component ({
    selector: 'release-container',
    templateUrl: 'release-container.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class ReleaseContainerComponent implements OnInit {

    releases:any

    constructor(private route: ActivatedRoute, private releaseService: ReleaseService) {
        
    }

    ngOnInit() {
        this.releases = this.releaseService.getReleases()
    }

}