import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ContentService } from 'src/app/shared/content.service';
import { ReleaseService } from '../releases/shared/releases.service';
import { Title, Meta } from '@angular/platform-browser'


@Component ({
    selector: 'music-main',
    templateUrl: 'music-main.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class MusicMainComponent implements OnInit {

    musicContent: any
    homeContent: any
    releases:any
    url:any
    
    constructor(private router:Router, private contentService: ContentService, private releaseService: ReleaseService, private title: Title, private meta: Meta) {
  
    }
  
    ngOnInit() {
      this.musicContent = this.contentService.getMainContent('music')
      this.homeContent = this.contentService.getMainContent('home')
      this.releases = this.releaseService.getReleases()

      this.url = this.router.url

      //set tags for SEO
      this.title.setTitle('GTA Digital - Techno - Music');
      this.meta.updateTag({ name: 'description', content: this.musicContent.description });
      this.meta.updateTag({ name: 'robots', content: 'index, follow'  })

      //set tags for Twitter
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
      this.meta.updateTag({ name: 'twitter:title', content: 'GTA Digital ' + this.musicContent.title });
      this.meta.updateTag({ name: 'twitter:description', content: this.musicContent.description });
      this.meta.updateTag({ name: 'twitter:image', content: this.homeContent.heroImage });
      this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

      //set tags for Facebook
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
      this.meta.updateTag({ property: 'og:title', content: 'GTA Digital ' + this.musicContent.title });
      this.meta.updateTag({ property: 'og:description', content: this.musicContent.description });
      this.meta.updateTag({ property: 'og:image', content: this.homeContent.heroImage });
      this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });
    
    }

}