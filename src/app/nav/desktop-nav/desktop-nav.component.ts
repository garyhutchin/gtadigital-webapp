import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { ContentService } from 'src/app/shared/content.service';
import { Navigation, SocialMedia, Content } from '../../models/content-interface';

@Component ({
    selector: 'desktop-nav',
    templateUrl: 'desktop-nav.component.html',
    styleUrls: ['desktop-nav.component.css']
})

export class DesktopNavComponent implements OnInit {
    
    navItems: any[]

    socialMediaLinksList: AngularFireList<SocialMedia>
    socialMediaLinks: Observable<SocialMedia[]>

    underConstructionObject: AngularFireObject<Content>
    underConstruction: Observable<Content>

    constructor(private afd: AngularFireDatabase, private contentService: ContentService) {

    }

    ngOnInit() {

        this.navItems = this.contentService.getNavItems()

        this.socialMediaLinksList = this.afd.list('social-media-links')
        this.socialMediaLinks = this.socialMediaLinksList.valueChanges()

        this.underConstructionObject = this.afd.object('main-content/under-construction-banner')
        this.underConstruction = this.underConstructionObject.valueChanges()
    }

}