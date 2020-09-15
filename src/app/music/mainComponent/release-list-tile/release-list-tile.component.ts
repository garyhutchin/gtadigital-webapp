import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Release } from '../../../models/content-interface';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class ReleaseListTileComponent implements OnInit {
    releasesCollection: AngularFirestoreCollection<Release>
    releases: Observable<Release[]>
    musicContent: any

    constructor(private router:Router, private route: ActivatedRoute, private contentService: ContentService, private afs: AngularFirestore) {

    }

    ngOnInit() {
        this.releasesCollection = this.afs.collection('releases', ref => {
            return ref.orderBy('id', 'desc')
        })
        this.releases = this.releasesCollection.valueChanges()

        this.musicContent = this.contentService.getMusicContent('music')
    }

    viewReleases() {
        this.router.navigate(['music/releases'])
    }
}