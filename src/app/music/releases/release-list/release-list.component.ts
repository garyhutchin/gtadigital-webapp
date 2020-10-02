import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';
import { Title, Meta } from '@angular/platform-browser'

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['../../../css/card-structure.component.css', '../../../css/features.component.css']
})

export class ReleaseListComponent implements OnInit {

    releases: any
    isFetching: boolean = false;
    error = null;

    constructor(private releaseService: ReleaseService, private title: Title, private meta: Meta) {
    }

    ngOnInit() {
      this.isFetching = true;
      this.releaseService.getReleases().subscribe(releaseItems => {
        this.isFetching = false;
        this.releases = releaseItems;
      });
      /*
        
        this.releaseService.getReleases().subscribe(releaseItems => {
          
          this.releases = releaseItems;
        }, error => {
          this.error = error.status;
          console.log(error)
        });*/
    }

}