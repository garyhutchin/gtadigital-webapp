import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../shared/podcast.service';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'podcasts-list',
  templateUrl: 'podcasts-list.component.html',
  styleUrls: ['../../../css/card-structure.component.css']
})
export class PodcastsListComponent implements OnInit {

  podcasts:any

  constructor( private podcastService: PodcastService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.podcasts = this.podcastService.getPodcasts()  
    this.title.setTitle("Podcasts")
  }

}
