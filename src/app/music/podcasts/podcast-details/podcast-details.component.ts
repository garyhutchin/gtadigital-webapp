import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { PodcastService } from '../shared/podcast.service';
import { Title, Meta } from '@angular/platform-browser'


@Component({
  selector: 'podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['podcast-details.component.css'],
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
export class PodcastDetailsComponent implements OnInit {

  podcast:any

  isClosed: boolean = true; 

  url:any

  OpenModal() {
    this.isClosed = !this.isClosed;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private podcastService: PodcastService, private title: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{

      this.url = this.router.url

      this.podcast = this.podcastService.getPodcast(+this.activatedRoute.snapshot.params['id'])

      //set tags for SEO
      this.title.setTitle(this.podcast.title + " by " + this.podcast.artistName);
      this.meta.updateTag({ name: 'description', content: this.podcast.shortDescription });
      this.meta.updateTag({ name: 'robots', content: 'index, follow'  });

      //set tags for Twitter
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
      this.meta.updateTag({ name: 'twitter:title', content: this.podcast.title + " by " + this.podcast.artistName });
      this.meta.updateTag({ name: 'twitter:description', content: this.podcast.shortDescription });
      this.meta.updateTag({ name: 'twitter:image', content: this.podcast.artwork });
      this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

      //set tags for Facebook
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
      this.meta.updateTag({ property: 'og:title', content: this.podcast.title + " by " + this.podcast.artistName });
      this.meta.updateTag({ property: 'og:description', content: this.podcast.shortDescription });
      this.meta.updateTag({ property: 'og:image', content: this.podcast.thumbnailUrl });
      this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

  });
  }

}
