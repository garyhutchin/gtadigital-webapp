import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../shared/latest-news.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { LatestNews } from 'src/app/models/content-interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'latest-news',
    templateUrl: 'latest-news.component.html',
    styleUrls: ['../../css/card-structure.component.css', '../../css/features.component.css'],
    animations: [

      trigger('newsAnimation', [

        transition('* => *', [

          query(':enter', style({ opacity: 0}), {optional: true}),

          query(':enter', stagger('300ms', [
            animate('1s 0.5s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-50px)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
            ]))
          ]), {optional: true})

        ])

      ])

    ]
})

export class LatestNewsComponent implements OnInit {

  fetchedNewsItems: any;
  isFetching: boolean = false;
  error = null;

    constructor(private latestNewsService :LatestNewsService, private activatedRoute: ActivatedRoute) {

    }

  ngOnInit() {
    this.fetchedNewsItems = this.activatedRoute.snapshot.data['latestNews']
  }
}