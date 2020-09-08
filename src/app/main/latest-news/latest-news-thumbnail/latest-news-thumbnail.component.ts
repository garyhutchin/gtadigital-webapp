import { Component, Input } from '@angular/core';

@Component({
    selector: 'latest-news-thumbnail',
    templateUrl: 'latest-news-thumbnail.component.html',
    styleUrls: ['../../../css/thumbnails.component.css']
})

export class LatestNewsThumbnail {
    @Input() newsItem:any
    
}