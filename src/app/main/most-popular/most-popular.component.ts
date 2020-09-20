import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Release, Podcast } from '../../models/content-interface'
import { Observable } from 'rxjs';

@Component ({
    selector: 'most-popular',
    templateUrl: 'most-popular.component.html',
    styleUrls: ['../../css/card-structure.component.css'],
    animations: [

        trigger('mostPopReleaseAnim', [
  
          transition('* => *', [
  
            query(':enter', style({ opacity: 0}), {optional: true}),
  
            query(':enter', stagger('300ms', [
              animate('1s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
              ]))
            ]), {optional: true})
  
          ])
 
        ]),

        trigger('mostPopPodcastAnim', [
  
          transition('* => *', [
  
            query(':enter', style({ opacity: 0}), {optional: true}),
  
            query(':enter', stagger('300ms', [
              animate('1s 0.5s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
              ]))
            ]), {optional: true})
  
          ])
 
        ])
  
      ]
})

export class MostPopularComponent implements OnInit {

    releaseItemsList: AngularFireList<Release>
    releaseItems: Observable<Release[]>

    podcastItemsList: AngularFireList<Podcast>
    podcastItems: Observable<Podcast[]>

    constructor(private router:Router, private afd: AngularFireDatabase) {

    }

    ngOnInit() {

        this.releaseItemsList = this.afd.list('most-popular-releases')
        this.releaseItems = this.releaseItemsList.valueChanges()

        this.podcastItemsList = this.afd.list('most-popular-podcasts')
        this.podcastItems = this.podcastItemsList.valueChanges()

    }
}