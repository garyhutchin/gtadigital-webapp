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
  releaseNumber: number;

  @Input() urlId: any

  url: string

  constructor(private releaseService: ReleaseService, private activatedRoute: ActivatedRoute, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.releases = this.route.snapshot.data['releaseDetails']

    this.activatedRoute.url.subscribe(activeUrl =>{
      this.url=window.location.pathname.split(";")[0].split('/music/releases/gta').pop();
    });
    
    this.releaseNumber = parseInt(this.url, 10)
    console.log(this.releaseNumber)

    if (this.releaseNumber > 15) {
      return this.end = 6
    }
  }
  
}

