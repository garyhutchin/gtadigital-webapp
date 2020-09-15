import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Release } from '../../../models/content-interface';

@Component ({
    selector: 'release-details',
    templateUrl: 'release-details.component.html',
    styleUrls: ['release-details.component.css']
})

export class ReleaseDetailsComponent implements OnInit {
    releaseDoc: AngularFirestoreDocument<Release>;
    release: Observable<Release>

    constructor(private releaseService:ReleaseService, private activatedRoute: ActivatedRoute, private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.activatedRoute.url.subscribe(url =>{
            this.releaseDoc = this.afs.doc('releases/'+this.activatedRoute.snapshot.params['id'])
            this.release = this.releaseDoc.valueChanges()
            
        });

    }
}