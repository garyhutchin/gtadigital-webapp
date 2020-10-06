import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/shared/content.service';
import { ReleaseService } from '../../releases/shared/releases.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'release-list-tile',
  templateUrl: 'release-list-tile.component.html',
  styleUrls: ['../../../css/card-structure.component.css', '../../../css/main-structure.component.css', '../../../css/features.component.css'],
  animations: [

    trigger('releaseTileAnim', [

      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('200ms', [
          animate('1s 0.5s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(0px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
          ]))
        ]), { optional: true })

      ])

    ]),
    trigger('viewAllBtnAnim', [

      transition('* => *', [

        query(':self', style({ opacity: 0 }), { optional: true }),

        query(':self', stagger('200ms', [
          animate('1s 1.3s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(0px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
          ]))
        ]))

      ])

    ])

  ]
})

export class ReleaseListTileComponent implements OnInit {

  musicContent: any
  releases: any
  isFetching: boolean = false;
  error = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contentService: ContentService, private releaseService: ReleaseService) {

  }

  ngOnInit() {

    this.musicContent = this.activatedRoute.snapshot.data['musicPage']

    this.releases = this.activatedRoute.snapshot.data['releaseList']
  }

  viewReleases() {
    this.router.navigate(['music/releases'])
  }
}