import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'you-may-like-thumbnail',
  templateUrl: 'you-may-like-thumbnail.component.html',
  styleUrls: ['you-may-like-thumbnail.component.css']
})
export class YouMayLikeThumbnailComponent implements OnInit {
  
  @Input() release:any
  urlId: any

  url: string

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private location:Location) {

  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{
      this.url=window.location.pathname.split(";")[0].split('/music/releases/').pop();
      console.log(this.url)
      this.urlId = this.url
    });
  }

}
