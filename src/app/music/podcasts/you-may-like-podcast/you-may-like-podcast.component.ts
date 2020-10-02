import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PodcastService } from '../shared/podcast.service';

@Component({
  selector: 'you-may-like-podcast',
  templateUrl: './you-may-like-podcast.component.html',
  styleUrls: ['./you-may-like-podcast.component.css']
})
export class YouMayLikePodcastComponent implements OnInit {

  podcasts:any

  start : number = 0;
  end : number = 5;
  releaseNumber: number;

  constructor( private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, private podcastService: PodcastService) {

  }

  ngOnInit() {

    this.podcastService.getPodcasts().subscribe(podcastItems => {
      this.podcasts = podcastItems
    })

    this.activatedRoute.url.subscribe(url =>{
  
      this.releaseNumber = this.activatedRoute.snapshot.params['id']
  
      if (this.releaseNumber > 25) {
        return this.end = 6
      }
      
  });
  }
 
}