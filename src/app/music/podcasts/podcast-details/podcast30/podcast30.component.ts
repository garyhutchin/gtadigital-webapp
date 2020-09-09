import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../../shared/podcast.service';

@Component({
  selector: 'podcast30',
  templateUrl: './podcast30.component.html',
  styleUrls: ['../podcast-details.component.css']
})
export class Podcast30Component implements OnInit {

  podcast:any

  isClosed: boolean = true;

  OpenModal() {
    this.isClosed = !this.isClosed;
  }

  constructor(private podcastService: PodcastService) {
  }

  ngOnInit() {
    this.podcast = this.podcastService.getPodcast('podcast-30')
  }

}
