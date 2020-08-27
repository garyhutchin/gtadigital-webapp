import { Component, Input } from '@angular/core';

@Component({
    selector: 'latest-news-thumbnail',
    templateUrl: 'latest-news-thumbnail.component.html',
    styleUrls: ['latest-news-thumbnail.component.css']
})

export class LatestNewsThumbnail {
    @Input() newsItem:any
}