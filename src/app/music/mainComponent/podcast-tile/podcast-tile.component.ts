import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { PodcastService } from '../../podcasts/shared/podcast.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component ({
    selector: 'podcast-tile',
    templateUrl: 'podcast-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css', '../../../css/main-structure.component.css'],
    animations: [

        trigger('releaseTileAnim', [

            transition('* => *', [
    
              query(':enter', style({ opacity: 0}), {optional: true}),
    
              query(':enter', stagger('200ms', [
                animate('1s 1.5s ease-in', keyframes([
                  style({opacity: 0, transform: 'translateY(0px)', offset: 0}),
                  style({opacity: .5, transform: 'translateY(0px)', offset: 0.3}),
                  style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
                ]))
              ]), {optional: true})
    
            ])
    
          ]),
          trigger('viewAllBtnAnim', [
  
            transition('* => *', [
    
              query(':self', style({ opacity: 0 }), {optional: true}),
    
              query(':self', stagger('200ms', [
                animate('1s 2s ease-in', keyframes([
                  style({opacity: 0, transform: 'translateY(0px)', offset: 0}),
                  style({opacity: .5, transform: 'translateY(0px)', offset: 0.3}),
                  style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
                ]))
              ]))
    
            ])
    
          ])

    ]
})

export class PodcastTileComponent implements OnInit {
    
    musicContent: any
    podcasts:any

    constructor(private router: Router, private contentService: ContentService, private podcastService: PodcastService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.musicContent = this.activatedRoute.snapshot.data['musicPage']

        this.podcasts = this.activatedRoute.snapshot.data['podcastList']       
    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}