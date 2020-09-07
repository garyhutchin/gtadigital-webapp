import { Component, Input } from '@angular/core'

@Component({
    selector: 'release-thumbnail',
    templateUrl: 'release-thumbnail.component.html',
    styleUrls: ['../../../../css/thumbnails.component.css']
})

export class ReleaseThumbnailComponent {
    @Input() release:any
}