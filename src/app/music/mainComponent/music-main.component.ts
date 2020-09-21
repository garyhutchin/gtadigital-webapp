import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ContentService } from 'src/app/shared/content.service';
import { ReleaseService } from '../releases/shared/releases.service';


@Component ({
    selector: 'music-main',
    templateUrl: 'music-main.component.html',
    styleUrls: ['../../css/main-structure.component.css']
})

export class MusicMainComponent implements OnInit {

    musicContent: any
    releases:any[]
    
    constructor(private router:Router, private contentService: ContentService, private releaseService: ReleaseService) {
  
    }
  
    ngOnInit() {
      this.musicContent = this.contentService.getMusicContent('music')
      this.releases = this.releaseService.getReleases()
    }

}