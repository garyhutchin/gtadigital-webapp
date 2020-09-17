import { Component, OnInit } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Navigation, SocialMedia, Content } from '../../models/content-interface';

@Component ({
    selector: 'desktop-nav',
    templateUrl: 'desktop-nav.component.html',
    styleUrls: ['desktop-nav.component.css']
})

export class DesktopNavComponent implements OnInit {

    navItemsCollection: AngularFirestoreCollection<Navigation>
    navItems: Observable<Navigation[]>

    socialMediaLinksCollection: AngularFirestoreCollection<SocialMedia>
    socialMediaLinks: Observable<SocialMedia[]>

    underConstructionDoc: AngularFirestoreDocument<Content>
    underConstruction: Observable<Content>

    constructor(private afs: AngularFirestore) {

    }

    ngOnInit() {
        this.navItemsCollection = this.afs.collection('navigation', ref => {
            return ref.orderBy('id', 'asc')
        })
        this.navItems = this.navItemsCollection.valueChanges()

        this.socialMediaLinksCollection = this.afs.collection('social-media-links', ref => {
            return ref.orderBy('id', 'asc')
        })
        this.socialMediaLinks = this.socialMediaLinksCollection.valueChanges()

        this.underConstructionDoc = this.afs.doc('main-content/under-construction-banner')
        this.underConstruction = this.underConstructionDoc.valueChanges()
    }

}