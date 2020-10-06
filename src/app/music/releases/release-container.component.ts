import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ReleaseService } from './shared/releases.service';
import { Title, Meta } from '@angular/platform-browser'
import { ContentService } from 'src/app/shared/content.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'release-container',
  templateUrl: 'release-container.component.html',
  styleUrls: ['../../css/main-structure.component.css', '../../css/features.component.css'],
  animations: [

    trigger('heroAnim', [

      transition('* => *', [

        query(':self', style({ opacity: 0 }), { optional: true }),

        query(':self', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(0px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0px)', offset: 1 }),
          ]))
        ]), { optional: true })

      ])

    ])

  ]
})

export class ReleaseContainerComponent implements OnInit {

  releases: any
  isFetching: boolean = false;
  error = null;
  url: any
  homeContent: any
  releaseContent: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private releaseService: ReleaseService, private contentService: ContentService, private title: Title, private meta: Meta) {

  }

  ngOnInit() {

    this.releaseContent = this.activatedRoute.snapshot.data['releasePage']

    this.url = this.router.url

    //set tags for SEO
    this.title.setTitle('GTA Digital - Techno - ' + this.releaseContent.title)
    this.meta.updateTag({ name: 'description', content: this.releaseContent.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    //set tags for Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
    this.meta.updateTag({ name: 'twitter:title', content: 'GTA Digital - Techno - ' + this.releaseContent.title });
    this.meta.updateTag({ name: 'twitter:description', content: this.releaseContent.description });
    this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk' + this.url });

    //set tags for Facebook
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
    this.meta.updateTag({ property: 'og:title', content: 'GTA Digital - Techno - ' + this.releaseContent.title });
    this.meta.updateTag({ property: 'og:description', content: this.releaseContent.description });
    this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk' + this.url });

    this.releases = this.activatedRoute.snapshot.data['releaseList']

    this.homeContent = this.activatedRoute.snapshot.data['homePage']

    this.meta.updateTag({ name: 'twitter:image', content: this.homeContent.heroImage });
    this.meta.updateTag({ property: 'og:image', content: this.homeContent.heroImage });
  }

}