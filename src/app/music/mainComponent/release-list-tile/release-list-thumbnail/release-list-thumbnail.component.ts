import { Component, Input } from '@angular/core';

@Component({
    selector: 'release-list-thumbnail',
    templateUrl: 'release-list-thumbnail.component.html',
    styleUrls: ['release-list-thumbnail.component.css']
})

export class ReleaseListThumbnail {
    @Input() release:any
}