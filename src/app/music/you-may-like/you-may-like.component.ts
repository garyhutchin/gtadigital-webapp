import { Component, OnInit, Input } from '@angular/core';
import { ReleaseService } from '../releases/shared/releases.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'you-may-like',
  templateUrl: './you-may-like.component.html',
  styleUrls: ['./you-may-like.component.css']
})
export class YouMayLikeComponent implements OnInit {
  releases:any[]

  start : number = 0;
  end : number = 5;

  @Input() urlId: any

  url: string

  constructor(private releaseService: ReleaseService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.releases = this.releaseService.getReleases()

  }
  
}

