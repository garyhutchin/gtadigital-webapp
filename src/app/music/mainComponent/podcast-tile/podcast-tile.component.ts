import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { Observable } from 'rxjs';
import { Podcast, Content } from '../../../models/content-interface';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Component ({
    selector: 'podcast-tile',
    templateUrl: 'podcast-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class PodcastTileComponent implements OnInit {
    
    podcastsList: AngularFireList<Podcast>
    podcasts: Observable<Podcast[]>
    
    musicContentObject: AngularFireObject<Content>
    musicContent: Observable<Content>

    constructor(private router: Router, private contentService: ContentService, private afd: AngularFireDatabase) {

    }

    ngOnInit() {
        this.podcastsList = this.afd.list('podcasts')
        this.podcasts = this.podcastsList.valueChanges()

        this.musicContentObject = this.afd.object('main-content/music')
        this.musicContent = this.musicContentObject.valueChanges()

        
    }

    viewPodcasts() {
        this.router.navigate(['music/podcasts'])
    }
}