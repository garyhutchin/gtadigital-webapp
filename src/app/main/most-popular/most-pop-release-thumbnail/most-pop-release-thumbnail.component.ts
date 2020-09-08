import { Component, Input } from '@angular/core';

@Component({
    selector: 'most-pop-release-thumbnail',
    templateUrl: 'most-pop-release-thumbnail.component.html',
    styleUrls: ['../../../css/thumbnails.component.css']
})

export class MostPopularReleaseThumbnail {
    @Input() releaseItem:any
}