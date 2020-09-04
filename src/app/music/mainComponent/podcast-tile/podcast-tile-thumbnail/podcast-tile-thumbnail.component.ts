import { Component, Input } from '@angular/core'

@Component({
    selector: 'podcast-tile-thumbnail',
    templateUrl: 'podcast-tile-thumbnail.component.html',
    styleUrls: ['podcast-tile-thumbnail.component.css']
})

export class PodcastTileThumbnail {
    @Input() podcast:any
}