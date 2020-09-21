import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Release, Content } from '../../../models/content-interface';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Component ({
    selector: 'release-list-tile',
    templateUrl: 'release-list-tile.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class ReleaseListTileComponent implements OnInit {
   
    releasesList: AngularFireList<Release>
    releases: Observable<Release[]>

    musicContentObject: AngularFireObject<Content>
    musicContent: Observable<Content>

    constructor(private router:Router, private route: ActivatedRoute, private afd: AngularFireDatabase) {

    }

    ngOnInit() {
        
        this.releasesList = this.afd.list('releases')
        this.releases = this.releasesList.valueChanges()

        this.musicContentObject = this.afd.object('main-content/music')
        this.musicContent = this.musicContentObject.valueChanges()
    }

    viewReleases() {
        this.router.navigate(['music/releases'])
    }
}