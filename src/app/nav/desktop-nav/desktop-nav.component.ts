import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';

@Component({
    selector: 'desktop-nav',
    templateUrl: 'desktop-nav.component.html',
    styleUrls: ['desktop-nav.component.css']
})

export class DesktopNavComponent implements OnInit {

    navItems: any[]

    socialMediaLinks: any

    underConstruction: any

    constructor(private contentService: ContentService) {

    }

    ngOnInit() {

        this.contentService.getNavItems().subscribe(navContent => {
            this.navItems = navContent;
        })

        this.contentService.getSocialMediaLinks().subscribe(socialMediaLinkItems => {
            this.socialMediaLinks = socialMediaLinkItems
        })

        //this.underConstruction = this.contentService.getMainContent('under-construction')

    }

}