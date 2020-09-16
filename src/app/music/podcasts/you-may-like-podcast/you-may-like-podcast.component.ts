import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Podcast } from '../../../models/content-interface';

@Component({
  selector: 'you-may-like-podcast',
  templateUrl: './you-may-like-podcast.component.html',
  styleUrls: ['./you-may-like-podcast.component.css']
})
export class YouMayLikePodcastComponent implements OnInit {

  podcastsCollection: AngularFirestoreCollection<Podcast>
  podcasts: Observable<Podcast[]>

  start : number = 0;
  end : number = 5;
  releaseNumber: number;

  constructor( private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{
      this.podcastsCollection = this.afs.collection('podcasts', ref => {
        return ref.orderBy('id', 'desc')
    })
    this.podcasts = this.podcastsCollection.valueChanges()
  
      this.releaseNumber = this.activatedRoute.snapshot.params['id']
  
      if (this.releaseNumber > 25) {
        return this.end = 6
      }
  });
  }
 
}