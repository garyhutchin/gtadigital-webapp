import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Podcast } from '../../../models/content-interface';

@Component ({
    selector: 'podcast-tile',
    templateUrl: 'podcast-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class PodcastTileComponent implements OnInit {
    
    podcastsCollection: AngularFirestoreCollection<Podcast>
    podcasts: Observable<Podcast[]>
    musicContent:any

    constructor(private router: Router, private contentService: ContentService, private afs: AngularFirestore) {

    }

    ngOnInit() {
        this.podcastsCollection = this.afs.collection('podcasts', ref => {
            return ref.orderBy('id', 'desc')
        })
        this.podcasts = this.podcastsCollection.valueChanges()

        this.musicContent = this.contentService.getMusicContent('music')
    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}