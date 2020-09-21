import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { Navigation, SocialMedia, Content } from '../../models/content-interface';

@Component ({
    selector: 'desktop-nav',
    templateUrl: 'desktop-nav.component.html',
    styleUrls: ['desktop-nav.component.css']
})

export class DesktopNavComponent implements OnInit {

    //navItemsCollection: AngularFirestoreCollection<Navigation>
    //navItems: Observable<Navigation[]>

    navItemsList: AngularFireList<Navigation>
    navItems: Observable<Navigation[]>

    socialMediaLinksList: AngularFireList<SocialMedia>
    socialMediaLinks: Observable<SocialMedia[]>

    underConstructionObject: AngularFireObject<Content>
    underConstruction: Observable<Content>

    constructor(private afd: AngularFireDatabase) {

    }

    ngOnInit() {
        //this.navItemsCollection = this.afs.collection('navigation', ref => {
        //    return ref.orderBy('id', 'asc')
        //})
        //this.navItems = this.navItemsCollection.valueChanges()

        this.navItemsList = this.afd.list('navigation')
        this.navItems = this.navItemsList.valueChanges()

        this.socialMediaLinksList = this.afd.list('social-media-links')
        this.socialMediaLinks = this.socialMediaLinksList.valueChanges()

        this.underConstructionObject = this.afd.object('main-content/under-construction-banner')
        this.underConstruction = this.underConstructionObject.valueChanges()
    }

}