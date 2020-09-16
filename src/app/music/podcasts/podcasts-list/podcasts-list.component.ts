import { Component, OnInit } from '@angular/core';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Podcast } from '../../../models/content-interface';

@Component({
  selector: 'podcasts-list',
  templateUrl: 'podcasts-list.component.html',
  styleUrls: ['../../../css/card-structure.component.css']
})
export class PodcastsListComponent implements OnInit {

  podcastsCollection: AngularFirestoreCollection<Podcast>
  podcasts: Observable<Podcast[]>

  constructor( private afs: AngularFirestore) { }

  ngOnInit() {
    this.podcastsCollection = this.afs.collection('podcasts', ref => {
      return ref.orderBy('id', 'desc')
  })
  this.podcasts = this.podcastsCollection.valueChanges()
  }

}
