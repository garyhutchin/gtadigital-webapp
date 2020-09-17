import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Podcast } from '../../../models/content-interface';

@Component({
  selector: 'podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['podcast-details.component.css'],
  animations: [

    trigger('tracklistAnim', [

        transition('* => *', [

          query(':self', style({ opacity: 0}), {optional: true}),

          query(':self', stagger('300ms', [
            animate('.5s ease-in-out', keyframes([
              style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
              style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
            ]))
          ]))

        ])

      ])
  ]
})
export class PodcastDetailsComponent implements OnInit {

  podcastDoc: AngularFirestoreDocument<Podcast>;
  podcast: Observable<Podcast>

  isClosed: boolean = true; 

  OpenModal() {
    this.isClosed = !this.isClosed;
  }

  constructor(private activatedRoute: ActivatedRoute, private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{
      this.podcastDoc = this.afs.doc('podcasts/'+this.activatedRoute.snapshot.params['id'])
      this.podcast = this.podcastDoc.valueChanges()
      
  });
  }

}