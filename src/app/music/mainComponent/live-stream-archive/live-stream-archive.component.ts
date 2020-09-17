import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'live-stream-archive',
    templateUrl: 'live-stream-archive.component.html',
    styleUrls: ['live-stream-archive.component.css']
})

export class LiveStreamArchiveComponent implements OnInit {
    
    isWrapperExpanded: boolean;

    ngOnInit() {
        this.isWrapperExpanded = false; 
    }

    expandLiveStream() {
        this.isWrapperExpanded = true;
    }

    collapseLiveStream() {
        this.isWrapperExpanded = false;
    }

}