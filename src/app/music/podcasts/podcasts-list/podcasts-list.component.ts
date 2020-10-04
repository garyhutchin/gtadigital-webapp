import { Component, OnInit } from '@angular/core';
import { PodcastService } from '../shared/podcast.service';
import { Title, Meta } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'podcasts-list',
  templateUrl: 'podcasts-list.component.html',
  styleUrls: ['../../../css/card-structure.component.css']
})
export class PodcastsListComponent implements OnInit {

  podcasts:any

  constructor( private podcastService: PodcastService, private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.podcasts = this.activatedRoute.snapshot.data['podcastList']
  }

}
