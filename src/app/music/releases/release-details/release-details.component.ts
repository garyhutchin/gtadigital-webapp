import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { ReleaseService } from '../shared/releases.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
    selector: 'release-details',
    templateUrl: 'release-details.component.html',
    styleUrls: ['release-details.component.css']
})

export class ReleaseDetailsComponent implements OnInit {
    release:any

    constructor(private releaseService:ReleaseService, private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.release = this.releaseService.getRelease(+this.route.snapshot.params['id'])
    }
    
    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [
        {
            title: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).track1Title}`,
            link: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).clip1Url}`
        },
        {
            title: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).track2Title}`,
            link: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).clip2Url}`
        },
        {
            title: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).track3Title}`,
            link: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).clip3Url}`
        },
        {
            title: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).track4Title}`,
            link: `${this.releaseService.getRelease(+this.route.snapshot.params['id']).clip4Url}`
        }
    ];

    msaapDisplayTitle = true;
    msaapDisplayPlayList = false;
    msaapPageSizeOptions = 4;
    msaapDisplayVolumeControls = true;

}