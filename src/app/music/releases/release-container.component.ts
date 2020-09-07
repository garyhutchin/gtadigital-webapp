import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component ({
    selector: 'release-container',
    templateUrl: 'release-container.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class ReleaseContainerComponent implements OnInit {

    releases:any

    constructor(private route: ActivatedRoute) {
        
    }

    ngOnInit() {
        this.releases = this.route.snapshot.data['releases']
    }

}