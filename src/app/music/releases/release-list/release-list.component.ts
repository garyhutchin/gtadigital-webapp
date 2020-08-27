import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { ReleaseService } from '../shared/releases.service';

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['release-list.component.css'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
              style({ opacity: 0 }), animate('0.5s ease-in', style({ opacity: 1 }))]
            ),
            transition(':leave',
              [style({ opacity: 1 }), animate('0.2s ease-out', style({ opacity: 0 }))]
            )
          ])
    ]
})

export class ReleaseListComponent implements OnInit {
    releases:any[]

    constructor(private releaseService: ReleaseService) {
    }

    ngOnInit() {
        this.releases = this.releaseService.getReleases()
    }

}