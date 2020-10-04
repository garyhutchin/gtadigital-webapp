import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ContentService } from 'src/app/shared/content.service';
import { ReleaseService } from '../releases/shared/releases.service';
import { Title, Meta } from '@angular/platform-browser'


@Component ({
    selector: 'music-main',
    templateUrl: 'music-main.component.html',
    styleUrls: ['../../css/main-structure.component.css', '../../css/features.component.css']
})

export class MusicMainComponent implements OnInit {

    musicContent: any
    homeContent: any
    releases:any
    url:any
    isFetching: boolean = false;
    error = null;
    
    constructor(private router:Router, private contentService: ContentService, private releaseService: ReleaseService, private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute) {
  
    }
  
    ngOnInit() {

      this.url = this.router.url

      this.musicContent = this.activatedRoute.snapshot.data['musicPage']

        //set tags for SEO
        this.title.setTitle('GTA Digital - Techno - ' + this.musicContent.title);
        this.meta.updateTag({ name: 'description', content: this.musicContent.description });
        this.meta.updateTag({ name: 'robots', content: 'index, follow'  })
  
        //set tags for Twitter
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
        this.meta.updateTag({ name: 'twitter:title', content: 'GTA Digital - Techno - ' + this.musicContent.title });
        this.meta.updateTag({ name: 'twitter:description', content: this.musicContent.description });
        this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });
  
        //set tags for Facebook
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
        this.meta.updateTag({ property: 'og:title', content: 'GTA Digital - Techno - ' + this.musicContent.title });
        this.meta.updateTag({ property: 'og:description', content: this.musicContent.description });
        this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

      this.homeContent = this.activatedRoute.snapshot.data['homePage']

        this.meta.updateTag({ name: 'twitter:image', content: this.homeContent.heroImage });
        this.meta.updateTag({ property: 'og:image', content: this.homeContent.heroImage });

      this.releases = this.activatedRoute.snapshot.data['releaseList']
    
    }

}