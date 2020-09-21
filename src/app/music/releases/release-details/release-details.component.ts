import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseService } from '../../releases/shared/releases.service'

@Component ({
    selector: 'release-details',
    templateUrl: 'release-details.component.html',
    styleUrls: ['release-details.component.css']
})

export class ReleaseDetailsComponent implements OnInit {
    
    release:any
    
    constructor(private activatedRoute: ActivatedRoute, private releaseService: ReleaseService) {
    }

    ngOnInit() {
        this.activatedRoute.url.subscribe(url =>{
            this.release = this.releaseService.getRelease(+this.activatedRoute.snapshot.params['id'])
        });

    }
}