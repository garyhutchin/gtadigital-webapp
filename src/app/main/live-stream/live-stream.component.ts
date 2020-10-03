import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';

@Component({
  selector: 'live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {

  homeContent: any
    
  constructor( private contentService: ContentService) {

  }

  ngOnInit() {
    this.contentService.getHomePageContent().subscribe(homePageContent => {
      this.homeContent = homePageContent
    })
  }

}
