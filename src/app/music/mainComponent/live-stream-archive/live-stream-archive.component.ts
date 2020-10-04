import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';

@Component ({
    selector: 'live-stream-archive',
    templateUrl: 'live-stream-archive.component.html',
    styleUrls: ['live-stream-archive.component.css']
})

export class LiveStreamArchiveComponent implements OnInit {
    
    liveStreamItems: any
    isWrapperExpanded: boolean;

    constructor(private contentService: ContentService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {

        this.isWrapperExpanded = false; 

        this.liveStreamItems = this.activatedRoute.snapshot.data['liveStream']

    }

    expandLiveStream() {
        this.isWrapperExpanded = true;
    }

    collapseLiveStream() {
        this.isWrapperExpanded = false;
    }

}