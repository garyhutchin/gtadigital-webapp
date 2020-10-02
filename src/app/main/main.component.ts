import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser'


@Component ({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['../css/main-structure.component.css'],
    animations: [

        trigger('heroAnim', [
  
            transition('* => *', [
    
              query(':self', style({ opacity: 0}), {optional: true}),
    
              query(':self', stagger('300ms', [
                animate('.5s ease-in', keyframes([
                  style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
                  style({opacity: .5, transform: 'translateX(0px)', offset: 0.3}),
                  style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
                ]))
              ]), {optional: true})
    
            ])
    
          ]),

        trigger('headerAnim', [
  
          transition('* => *', [
  
            query(':self', style({ opacity: 0 }), {optional: true}),
  
            query(':self', stagger('300ms', [
              animate('1s 0.2s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-50px)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
              ]))
            ]))
  
          ])
  
        ]),

        trigger('liveStreamAnim', [
  
            transition('* => *', [
    
              query(':self', style({ opacity: 0}), {optional: true}),
    
              query(':self', stagger('300ms', [
                animate('0.5s 1s ease-in', keyframes([
                  style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
                  style({opacity: .5, transform: 'translateX(0px)', offset: 0.3}),
                  style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
                ]))
              ]))
    
            ])
    
          ]),
  
      ]
})

export class MainComponent implements OnInit {

  homeContent: any
  url:any
    
  constructor(private router:Router, private contentService: ContentService, private title: Title, private meta: Meta) {

  }

  ngOnInit() {

    this.url = this.router.url

    this.homeContent = this.contentService.getMainContent('home')

    //set tags for SEO
    this.title.setTitle(this.homeContent.title);
    this.meta.updateTag({ name: 'description', content: this.homeContent.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow'  })

    //set tags for Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: '@gta_digital' });
    this.meta.updateTag({ name: 'twitter:title', content: 'GTA Digital - Underground Techno' });
    this.meta.updateTag({ name: 'twitter:description', content: this.homeContent.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.homeContent.heroImage });
    this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

    //set tags for Facebook
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'gtadigital' });
    this.meta.updateTag({ property: 'og:title', content: 'GTA Digital - Underground Techno' });
    this.meta.updateTag({ property: 'og:description', content: this.homeContent.description });
    this.meta.updateTag({ property: 'og:image', content: this.homeContent.heroImage });
    this.meta.updateTag({ property: 'og:url', content: 'https://gtadigital.co.uk'+ this.url });

  }

  listenNow() {
        this.router.navigate(['music'])
  }

}