import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Release } from '../../../models/content-interface';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['../../../css/card-structure.component.css']
})

export class ReleaseListComponent implements OnInit {
    releasesList: AngularFireList<Release>
    releases: Observable<Release[]>

    constructor(private afd: AngularFireDatabase) {
    }

    ngOnInit() {
        this.releasesList = this.afd.list('releases')
        this.releases = this.releasesList.valueChanges()
    }

}