import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Release } from '../../../models/content-interface';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Component ({
    selector: 'release-details',
    templateUrl: 'release-details.component.html',
    styleUrls: ['release-details.component.css']
})

export class ReleaseDetailsComponent implements OnInit {
    
    
    releaseObject: AngularFireObject<Release>;
    release: Observable<Release>

    constructor(private releaseService:ReleaseService, private activatedRoute: ActivatedRoute, private afd: AngularFireDatabase) {
    }

    ngOnInit() {
        this.activatedRoute.url.subscribe(url =>{
            this.releaseObject = this.afd.object('releases/'+this.activatedRoute.snapshot.params['id'])
            this.release = this.releaseObject.valueChanges() 
        });

    }
}