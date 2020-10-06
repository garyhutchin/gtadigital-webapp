import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../shared/podcast.service';
import { Title, Meta } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'podcasts-list',
  templateUrl: 'podcasts-list.component.html',
  styleUrls: ['../../../css/card-structure.component.css'],
  animations: [

    trigger('podcastListAnim', [

      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('150ms', [
          animate('1s 0.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(0px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
          ]))
        ]), { optional: true })

      ])

    ])
  ]
})
export class PodcastsListComponent implements OnInit {

  podcasts: any

  constructor(private podcastService: PodcastService, private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.podcasts = this.activatedRoute.snapshot.data['podcastList']
  }

}
