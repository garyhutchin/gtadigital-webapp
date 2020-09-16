import { Component, OnInit } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Navigation } from '../../models/content-interface';

@Component ({
    selector: 'desktop-nav',
    templateUrl: 'desktop-nav.component.html',
    styleUrls: ['desktop-nav.component.css']
})

export class DesktopNavComponent implements OnInit {

    navItemsCollection: AngularFirestoreCollection<Navigation>
    navItems: Observable<Navigation[]>

    constructor(private afs: AngularFirestore) {

    }

    ngOnInit() {
        this.navItemsCollection = this.afs.collection('navigation', ref => {
            return ref.orderBy('id', 'asc')
        })
        this.navItems = this.navItemsCollection.valueChanges()
    }

}