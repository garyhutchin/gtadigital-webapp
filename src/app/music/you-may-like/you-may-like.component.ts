import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReleaseService } from '../releases/shared/releases.service';

@Component({
  selector: 'you-may-like',
  templateUrl: './you-may-like.component.html',
  styleUrls: ['./you-may-like.component.css']
})
export class YouMayLikeComponent implements OnInit {

  releases:any

  start : number = 0;
  end : number = 5;
  releaseNumber: number;

  constructor( private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, private releaseService: ReleaseService) {

  }

  ngOnInit() {

    this.releases = this.releaseService.getReleases()
    
    this.activatedRoute.url.subscribe(url =>{
      this.releaseNumber = this.activatedRoute.snapshot.params['id']
      if (this.releaseNumber > 15) {
        return this.end = 6
      }
  });

  }
 
}

