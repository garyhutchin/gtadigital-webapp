import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../shared/podcast.service';

@Component({
  selector: 'podcasts-list',
  templateUrl: 'podcasts-list.component.html',
  styleUrls: ['podcasts-list.component.css']
})
export class PodcastsListComponent implements OnInit {
podcasts:any[]

  constructor(private podcastService: PodcastService) { }

  ngOnInit() {
      this.podcasts = this.podcastService.getPodcasts()
  }

}
