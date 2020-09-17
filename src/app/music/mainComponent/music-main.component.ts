import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { ContentService } from 'src/app/shared/content.service';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Release, Content } from '../../models/content-interface';


@Component ({
    selector: 'music-main',
    templateUrl: 'music-main.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class MusicMainComponent implements OnInit {

    releasesCollection: AngularFirestoreCollection<Release>
    releases: Observable<Release[]>

    musicContentDoc: AngularFirestoreDocument<Content>
    musicContent: Observable<Content>
    
    constructor(private router: Router, private route: ActivatedRoute, private contentService: ContentService, private afs: AngularFirestore) {
        
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this.releasesCollection = this.afs.collection('releases', ref => {
            return ref.orderBy('id', 'desc')
        })
        this.releases = this.releasesCollection.valueChanges()

        this.musicContentDoc = this.afs.doc('main-content/music')
        this.musicContent = this.musicContentDoc.valueChanges()

        //this.musicContent = this.contentService.getMusicContent('music')
    }

}