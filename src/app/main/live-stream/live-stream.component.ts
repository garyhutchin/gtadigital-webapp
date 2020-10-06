import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';

@Component({
  selector: 'live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {

  homeContent: any

  constructor(private contentService: ContentService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.homeContent = this.activatedRoute.snapshot.data['homePage']
  }

}
