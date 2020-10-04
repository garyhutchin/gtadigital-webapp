import { Component, OnInit } from '@angular/core';
import { PodcastService } from './shared/podcast.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';

@Component({
  selector: 'podcasts-container',
  templateUrl: './podcasts-container.component.html',
  styleUrls: ['../../css/main-structure.component.css']
})
export class PodcastsContainerComponent implements OnInit {

  podcasts: any
  url: any
  homeContent: any
  podcastContent: any

  constructor(private podcastService: PodcastService, private contentService: ContentService, private title: Title, private meta: Meta, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.podcastContent = this.activatedRoute.snapshot.data['podcastPage']

    this.url = this.router.url

    //set tags for SEO
    this.title.setTitle('GTA Digital - Techno - ' + this.podcastContent.title)
    this.meta.updateTag({ name: 'description', content: this.podcastContent.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    //set tags for Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
    this.meta.updateTag({ name: 'twitter:title', content: 'GTA Digital - Techno - ' + this.podcastContent.title });
    this.meta.updateTag({ name: 'twitter:description', content: this.podcastContent.description });
    this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk' + this.url });

    //set tags for Facebook
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
    this.meta.updateTag({ property: 'og:title', content: 'GTA Digital - Techno - ' + this.podcastContent.title });
    this.meta.updateTag({ property: 'og:description', content: this.podcastContent.description });
    this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk' + this.url });

    this.podcasts = this.activatedRoute.snapshot.data['podcastList']

    this.homeContent = this.activatedRoute.snapshot.data['homePage']

    this.meta.updateTag({ name: 'twitter:image', content: this.homeContent.heroImage });
    this.meta.updateTag({ property: 'og:image', content: this.homeContent.heroImage });

  }

}
