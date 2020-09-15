import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Release } from '../../../models/content-interface';

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class ReleaseListComponent implements OnInit {
    releasesCollection: AngularFirestoreCollection<Release>
    releases: Observable<Release[]>

    constructor(private releaseService: ReleaseService, private route: ActivatedRoute, private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.releasesCollection = this.afs.collection('releases', ref => {
            return ref.orderBy('id', 'desc')
        })
        this.releases = this.releasesCollection.valueChanges()
    }

}