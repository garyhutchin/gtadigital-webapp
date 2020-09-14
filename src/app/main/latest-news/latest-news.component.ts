import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../shared/latest-news.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Content } from '../../models/content-interface';

@Component({
    selector: 'latest-news',
    templateUrl: 'latest-news.component.html',
    styleUrls: ['../../css/card-structure.component.css'],
    animations: [

      trigger('newsAnimation', [

        transition('* => *', [

          query(':enter', style({ opacity: 0}), {optional: true}),

          query(':enter', stagger('300ms', [
            animate('1s 0.75s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
            ]))
          ]), {optional: true})

        ])

      ])

    ]
})

export class LatestNewsComponent implements OnInit {

    newsItemsCollection: AngularFirestoreCollection<Content>;
    newsItems: Observable<Content[]>;

    constructor(private latestNewsService: LatestNewsService, private afs: AngularFirestore){

    }

    ngOnInit() {
      this.newsItemsCollection = this.afs.collection('latest-news', ref => {
        return ref.orderBy('newsItem', 'desc')
      })
      this.newsItems = this.newsItemsCollection.valueChanges()

    }
}