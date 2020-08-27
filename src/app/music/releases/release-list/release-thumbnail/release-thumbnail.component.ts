import { Component, Input } from '@angular/core'

@Component({
    selector: 'release-thumbnail',
    templateUrl: 'release-thumbnail.component.html',
    styleUrls: ['release-thumbnail.component.css']
})

export class ReleaseThumbnailComponent {
    @Input() release:any
}