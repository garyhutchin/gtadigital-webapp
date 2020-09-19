import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router'
import { ContentService } from 'src/app/shared/content.service';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Release, Content } from '../../models/content-interface';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';


@Component ({
    selector: 'music-main',
    templateUrl: 'music-main.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class MusicMainComponent implements OnInit {

    releasesList: AngularFireList<Release>
    releases: Observable<Release[]>

    musicContentObject: AngularFireObject<Content>
    musicContent: Observable<Content>
    
    constructor(private router: Router, private route: ActivatedRoute, private contentService: ContentService, private afs: AngularFirestore, private afd: AngularFireDatabase) {
        
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this.releasesList = this.afd.list('releases')
        this.releases = this.releasesList.valueChanges()

        this.musicContentObject = this.afd.object('main-content/music')
        this.musicContent = this.musicContentObject.valueChanges()
    }

}