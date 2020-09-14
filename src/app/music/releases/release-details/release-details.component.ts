import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'release-details',
    templateUrl: 'release-details.component.html',
    styleUrls: ['release-details.component.css']
})

export class ReleaseDetailsComponent implements OnInit {
    release:any

    constructor(private releaseService:ReleaseService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.url.subscribe(url =>{
            this.release = this.releaseService.getRelease(+this.activatedRoute.snapshot.params['id'])
        });

    }
}