import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'live-stream-archive',
    templateUrl: 'live-stream-archive.component.html',
    styleUrls: ['live-stream-archive.component.css']
})

export class LiveStreamArchiveComponent implements OnInit {
    
    changeHeight: any;
    maxHeight: boolean;

    ngOnInit() {
        
    }

    changeHeightBtn() {
        this.changeHeight = 100;
        console.log(this.changeHeight)
        if (this.changeHeight = 100)
        return this.maxHeight = true;
        console.log(this.maxHeight)
    }

}