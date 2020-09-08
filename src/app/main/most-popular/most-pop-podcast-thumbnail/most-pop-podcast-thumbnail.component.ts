import { Component, Input } from '@angular/core';

@Component({
    selector: 'most-pop-podcast-thumbnail',
    templateUrl: 'most-pop-podcast-thumbnail.component.html',
    styleUrls: ['../../../css/thumbnails.component.css']
})

export class MostPopularPodcastThumbnail {
    @Input() podcastItem:any
}