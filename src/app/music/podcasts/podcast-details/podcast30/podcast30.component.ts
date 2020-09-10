import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../../shared/podcast.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'podcast30',
  templateUrl: './podcast30.component.html',
  styleUrls: ['../podcast-details.component.css'],
  animations: [

    trigger('tracklistAnim', [

        transition('* => *', [

          query(':self', style({ opacity: 0}), {optional: true}),

          query(':self', stagger('300ms', [
            animate('.5s ease-in-out', keyframes([
              style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
              style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
            ]))
          ]))

        ])

      ])
  ]
})
export class Podcast30Component implements OnInit {

  podcast:any

  isClosed: boolean = true;

  OpenModal() {
    this.isClosed = !this.isClosed;
  }

  constructor(private podcastService: PodcastService) {
  }

  ngOnInit() {
    this.podcast = this.podcastService.getPodcast('podcast-30')
  }

}
