import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component ({
    selector: 'live-stream-archive',
    templateUrl: 'live-stream-archive.component.html',
    styleUrls: ['live-stream-archive.component.css'],
    animations: [

        trigger('liveStreamAnim', [

            transition('* => *', [
      
              query(':self', style({ opacity: 0 }), { optional: true }),
      
              query(':self', stagger('200ms', [
                animate('1s 2.5s ease-in', keyframes([
                  style({ opacity: 0, transform: 'translateY(0px)', offset: 0 }),
                  style({ opacity: .5, transform: 'translateY(0px)', offset: 0.3 }),
                  style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
                ]))
              ]))
      
            ])
      
          ])

    ]
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