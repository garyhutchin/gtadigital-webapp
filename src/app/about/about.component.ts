import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router'



@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class AboutComponent implements OnInit {

  aboutContent: any
  url:any

  constructor(private contentService: ContentService, private title: Title, private meta: Meta, private router:Router, private activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {

    this.url = this.router.url

    this.aboutContent = this.activatedRoute.snapshot.data['aboutPage']

      //set tags for SEO
      this.title.setTitle('GTA Digital - Techno - ' + this.aboutContent.title);
      this.meta.updateTag({ name: 'description', content: this.aboutContent.description });
      this.meta.updateTag({ name: 'robots', content: 'index, follow'  })
  
      //set tags for Twitter
      this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
      this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
      this.meta.updateTag({ name: 'twitter:title', content: 'GTA Digital - Techno - ' + this.aboutContent.title });
      this.meta.updateTag({ name: 'twitter:description', content: this.aboutContent.description });
      this.meta.updateTag({ name: 'twitter:image', content: this.aboutContent.heroImage });
      this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });
  
      //set tags for Facebook
      this.meta.updateTag({ property: 'og:type', content: 'article' });
      this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
      this.meta.updateTag({ property: 'og:title', content: 'GTA Digital - Techno - ' + this.aboutContent.title });
      this.meta.updateTag({ property: 'og:description', content: this.aboutContent.description });
      this.meta.updateTag({ property: 'og:image', content: this.aboutContent.heroImage });
      this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

  }

}
