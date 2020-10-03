import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from '../../releases/shared/releases.service';
import { Title, Meta } from '@angular/platform-browser';

@Component ({
    selector: 'release-details',
    templateUrl: 'release-details.component.html',
    styleUrls: ['release-details.component.css', '../../../css/features.component.css']
})

export class ReleaseDetailsComponent implements OnInit {
    
    release:any
    url:any
    isFetching: boolean = false;
    error = null;
    
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private releaseService: ReleaseService, private title: Title, private meta: Meta) {
    }

    ngOnInit() {
        this.activatedRoute.url.subscribe(url =>{
            this.isFetching = true;
            this.release = this.activatedRoute.snapshot.data['release'];
                this.isFetching = false;
            

            this.url = this.router.url

            this.title.setTitle(this.release.catNo + " " + this.release.title + " by " + this.release.artistName);
            this.meta.updateTag({ name: 'description', content: this.release.shortDescription });
            this.meta.updateTag({ name: 'robots', content: 'index, follow'  })
            this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
            this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
            this.meta.updateTag({ name: 'twitter:title', content: this.release.catNo + " " + this.release.title + " by " + this.release.artistName });
            this.meta.updateTag({ name: 'twitter:description', content: this.release.shortDescription });
            this.meta.updateTag({ name: 'twitter:image', content: this.release.artwork });
            this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

            this.meta.updateTag({ property: 'og:type', content: 'article' });
            this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
            this.meta.updateTag({ property: 'og:title', content: this.release.catNo + " " + this.release.title + " by " + this.release.artistName });
            this.meta.updateTag({ property: 'og:description', content: this.release.shortDescription });
            this.meta.updateTag({ property: 'og:image', content: this.release.imageUrl });
            this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

        })

    }
}