import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ReleaseService } from './shared/releases.service';
import { Title, Meta } from '@angular/platform-browser'
import { ContentService } from 'src/app/shared/content.service';

@Component ({
    selector: 'release-container',
    templateUrl: 'release-container.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class ReleaseContainerComponent implements OnInit {

    releases:any
    url: any
    homeContent: any

    constructor(private route: ActivatedRoute, private router: Router, private releaseService: ReleaseService, private contentService: ContentService, private title: Title, private meta: Meta) {
        
    }

    ngOnInit() {
        this.releases = this.releaseService.getReleases()
        this.homeContent = this.contentService.getMainContent('home')

        this.url = this.router.url
  
        //set tags for SEO
        this.title.setTitle("GTA Digital - Techno - Releases")
        this.meta.updateTag({ name: 'description', content: 'Browse and listen to all of the music that has been released on the GTA Digital' });
        this.meta.updateTag({ name: 'robots', content: 'index, follow'  });
    
        //set tags for Twitter
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
        this.meta.updateTag({ name: 'twitter:title', content: 'GTA Digital Releases' });
        this.meta.updateTag({ name: 'twitter:description', content: 'Browse and listen to all of the music that has been released on the GTA Digital' });
        this.meta.updateTag({ name: 'twitter:image', content: this.homeContent.heroImage });
        this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });
    
        //set tags for Facebook
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
        this.meta.updateTag({ property: 'og:title', content: 'GTA Digital Releases' });
        this.meta.updateTag({ property: 'og:description', content: 'Browse and listen to all of the music that has been released on the GTA Digital' });
        this.meta.updateTag({ property: 'og:image', content: this.homeContent.heroImage });
        this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });
    }

}