import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { MostPopularService } from '../shared/most-pop.service';

@Component ({
    selector: 'most-popular',
    templateUrl: 'most-popular.component.html',
    styleUrls: ['../../css/card-structure.component.css'],
    animations: [

        trigger('mostPopReleaseAnim', [
  
          transition('* => *', [
  
            query(':enter', style({ opacity: 0}), {optional: true}),
  
            query(':enter', stagger('300ms', [
              animate('1s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
              ]))
            ]), {optional: true})
  
          ])
 
        ]),

        trigger('mostPopPodcastAnim', [
  
          transition('* => *', [
  
            query(':enter', style({ opacity: 0}), {optional: true}),
  
            query(':enter', stagger('300ms', [
              animate('1s 0.5s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
              ]))
            ]), {optional: true})
  
          ])
 
        ])
  
      ]
})

export class MostPopularComponent implements OnInit {

  releaseItems:any[]
  podcastItems:any[]

    constructor(private router:Router, private mostPopularService: MostPopularService, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {

      this.releaseItems = this.activatedRoute.snapshot.data['mostPopRelease']
      this.podcastItems = this.activatedRoute.snapshot.data['mostPopPodcast']

    }
}