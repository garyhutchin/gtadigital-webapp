import { Component, OnInit } from '@angular/core';
import { LatestNewsService } from '../shared/latest-news.service';

@Component({
    selector: 'latest-news',
    templateUrl: 'latest-news.component.html',
    styleUrls: ['../../css/card-structure.component.css'],
})

export class LatestNewsComponent implements OnInit {
    newsItems:any[]

    constructor(private latestNewsService: LatestNewsService){

    }

    ngOnInit() {
      this.newsItems = this.latestNewsService.getNewsItems()
    }
}