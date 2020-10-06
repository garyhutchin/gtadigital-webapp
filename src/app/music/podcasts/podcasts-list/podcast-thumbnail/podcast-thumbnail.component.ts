import { Component, Input } from '@angular/core';


@Component({
  selector: 'podcast-thumbnail',
  templateUrl: './podcast-thumbnail.component.html',
  styleUrls: ['../../../../css/thumbnails.component.css']
})
export class PodcastThumbnailComponent {
  @Input() podcast: any

}
