import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Podcast } from '../../../models/content-interface';

@Component({
  selector: 'podcasts-list',
  templateUrl: 'podcasts-list.component.html',
  styleUrls: ['../../../css/card-structure.component.css']
})
export class PodcastsListComponent implements OnInit {

  podcastsList: AngularFireList<Podcast>
  podcasts: Observable<Podcast[]>

  constructor( private afd: AngularFireDatabase) { }

  ngOnInit() {
    this.podcastsList = this.afd.list('podcasts')
  this.podcasts = this.podcastsList.valueChanges()
  }

}
