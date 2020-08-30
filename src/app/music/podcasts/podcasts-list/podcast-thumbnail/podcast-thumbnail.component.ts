import { Component, Input } from '@angular/core';


@Component({
  selector: 'podcast-thumbnail',
  templateUrl: './podcast-thumbnail.component.html',
  styleUrls: ['./podcast-thumbnail.component.css']
})
export class PodcastThumbnailComponent {
@Input() podcast:any

}
