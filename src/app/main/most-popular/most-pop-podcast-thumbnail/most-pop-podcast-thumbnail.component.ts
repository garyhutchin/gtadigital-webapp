import { Component, Input } from '@angular/core';

@Component({
    selector: 'most-pop-podcast-thumbnail',
    templateUrl: 'most-pop-podcast-thumbnail.component.html',
    styleUrls: ['most-pop-podcast-thumbnail.component.css']
})

export class MostPopularPodcastThumbnail {
    @Input() podcastItem:any
}