import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'you-may-like-podcast-thumbnail',
  templateUrl: './you-may-like-podcast-thumbnail.component.html',
  styleUrls: ['./you-may-like-podcast-thumbnail.component.css']
})
export class YouMayLikePodcastThumbnailComponent implements OnInit {
  
  @Input() podcast:any
  urlId: any

  url: string

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private location:Location) {

  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{
      this.url = this.activatedRoute.snapshot.params['id']
      console.log(this.url)
      this.urlId = this.url
    });
  }

}
