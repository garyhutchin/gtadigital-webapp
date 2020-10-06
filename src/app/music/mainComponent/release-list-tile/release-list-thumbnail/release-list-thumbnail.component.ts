import { Component, Input } from '@angular/core';

@Component({
    selector: 'release-list-thumbnail',
    templateUrl: 'release-list-thumbnail.component.html',
    styleUrls: ['../../../../css/thumbnails.component.css']
})

export class ReleaseListThumbnail {
    @Input() release: any
}