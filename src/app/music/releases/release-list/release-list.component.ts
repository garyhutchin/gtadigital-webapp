import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../shared/releases.service';
import { Title, Meta } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'release-list',
  templateUrl: 'release-list.component.html',
  styleUrls: ['../../../css/card-structure.component.css', '../../../css/features.component.css'],
  animations: [

    trigger('releaseListAnim', [

      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('150ms', [
          animate('1s 0.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(0px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
          ]))
        ]), { optional: true })

      ])

    ])
  ]
})

export class ReleaseListComponent implements OnInit {

  releases: any
  isFetching: boolean = false;
  error = null;

  constructor(private releaseService: ReleaseService, private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.releases = this.activatedRoute.snapshot.data['releaseList']
    /*
      
      this.releaseService.getReleases().subscribe(releaseItems => {
        
        this.releases = releaseItems;
      }, error => {
        this.error = error.status;
        console.log(error)
      });*/
  }

}