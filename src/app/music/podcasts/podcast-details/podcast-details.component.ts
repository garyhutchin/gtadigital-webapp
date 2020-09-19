import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Podcast } from '../../../models/content-interface';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

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

  id = +this.activatedRoute.snapshot.params['id']
  podcastObject: AngularFireObject<Podcast>;
  podcast: Observable<Podcast>

  isClosed: boolean = true; 

  OpenModal() {
    this.isClosed = !this.isClosed;
  }

  constructor(private activatedRoute: ActivatedRoute, private afd: AngularFireDatabase) {
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{
      this.podcastObject = this.afd.object('podcasts/'+`${this.id}`)
      this.podcast = this.podcastObject.valueChanges()
      
  });
  }

}
