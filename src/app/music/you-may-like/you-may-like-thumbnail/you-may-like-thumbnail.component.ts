import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReleaseService } from '../../releases/shared/releases.service';

@Component({
  selector: 'you-may-like-thumbnail',
  templateUrl: 'you-may-like-thumbnail.component.html',
  styleUrls: ['you-may-like-thumbnail.component.css']
})
export class YouMayLikeThumbnailComponent implements OnInit {
  
  @Input() release:any
  @Input() urlId: any

  url: string

  constructor(private activatedRoute: ActivatedRoute, private releaseService: ReleaseService) { 
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(activeUrl =>{
      this.url=window.location.pathname.split(";")[0].split('/music/releases/').pop();
    });
    
    this.urlId = this.url
    console.log (this.urlId)
  }

}
