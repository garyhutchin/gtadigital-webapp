import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'live-stream-archive-thumbnail',
  templateUrl: 'live-stream-archive-thumbnail.component.html',
  styleUrls: ['live-stream-archive-thumbnail.component.css']
})

export class LiveStreamArchiveThumbnailComponent implements OnInit {

  @Input() liveStreamItem: any

  constructor() { }

  ngOnInit(): void {
  }

}
