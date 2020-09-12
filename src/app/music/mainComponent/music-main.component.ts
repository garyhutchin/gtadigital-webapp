import { Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { ContentService } from 'src/app/shared/content.service';

@Component ({
    selector: 'music-main',
    templateUrl: 'music-main.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class MusicMainComponent implements OnInit {

    releases:any
    musicContent: any

    constructor(@Inject(WINDOW) private window: Window, private router: Router, private route: ActivatedRoute, private contentService: ContentService) {
        
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.window.scrollTo(0, 0)
        });

        this.releases = this.route.snapshot.data['musicReleases']

        this.musicContent = this.contentService.getMusicContent('music')
    }

}