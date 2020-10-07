import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['../css/main-structure.component.css', '../css/thumbnails.component.css', '../css/card-structure.component.css'],
  animations: [

    trigger('heroAnim', [

      transition('* => *', [

        query(':self', style({ opacity: 0 }), { optional: true }),

        query(':self', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateX(0px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0px)', offset: 1 }),
          ]))
        ]), { optional: true })

      ])

    ]),

    trigger('fade1', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 0.5s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('fade2', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 0.7s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('fade3', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 0.9s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('fade4', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 1.1s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('fade5', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 1.4s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('fade6', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 1.7s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('fade7', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 2s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('fade8', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 2.3s ease-in', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class StoreComponent implements OnInit {

  logoHoodie: any
  typeHoodie: any
  logoTshirtRegular: any
  typeTshirtRegular: any
  logoTshirtFitted: any
  typeTshirtFitted: any
  gtaDigitalMug: any
  gtaDigitalToteBag: any

  storeContent: any

  constructor(private contentService: ContentService, private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.logoHoodie = this.activatedRoute.snapshot.data['merchItem1']

    this.typeHoodie = this.activatedRoute.snapshot.data['merchItem2']

    this.logoTshirtRegular = this.activatedRoute.snapshot.data['merchItem3']

    this.typeTshirtRegular = this.activatedRoute.snapshot.data['merchItem4']

    this.logoTshirtFitted = this.activatedRoute.snapshot.data['merchItem5']

    this.typeTshirtFitted = this.activatedRoute.snapshot.data['merchItem6']

    this.gtaDigitalMug = this.activatedRoute.snapshot.data['merchItem7']

    this.gtaDigitalToteBag = this.activatedRoute.snapshot.data['merchItem8']

    this.storeContent = this.activatedRoute.snapshot.data['merch']

    this.title.setTitle('GTA Digital - Techno - ' + this.storeContent.title);
    this.meta.updateTag({ name: 'description', content: this.storeContent.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' })

  }

  isGreyLogoHoodieSelected = true;
  isNavyLogoHoodieSelected = false;
  isBlackLogoHoodieSelected = false;

  colourLogoHoodieGrey() {
    this.isGreyLogoHoodieSelected = true
    this.isNavyLogoHoodieSelected = false;
    this.isBlackLogoHoodieSelected = false;
  }

  colourLogoHoodieNavy() {
    this.isGreyLogoHoodieSelected = false
    this.isNavyLogoHoodieSelected = true;
    this.isBlackLogoHoodieSelected = false;
  }

  colourLogoHoodieBlack() {
    this.isGreyLogoHoodieSelected = false
    this.isNavyLogoHoodieSelected = false;
    this.isBlackLogoHoodieSelected = true;
  }

  isBlackTypeHoodieSelected = true;
  isGreyTypeHoodieSelected = false;
  isNavyTypeHoodieSelected = false;
  isRedTypeHoodieSelected = false;

  colourTypeHoodieBlack() {
    this.isBlackTypeHoodieSelected = true;
    this.isGreyTypeHoodieSelected = false;
    this.isNavyTypeHoodieSelected = false;
    this.isRedTypeHoodieSelected = false;
  }

  colourTypeHoodieGrey() {
    this.isBlackTypeHoodieSelected = false;
    this.isGreyTypeHoodieSelected = true;
    this.isNavyTypeHoodieSelected = false;
    this.isRedTypeHoodieSelected = false;
  }

  colourTypeHoodieNavy() {
    this.isBlackTypeHoodieSelected = false;
    this.isGreyTypeHoodieSelected = false;
    this.isNavyTypeHoodieSelected = true;
    this.isRedTypeHoodieSelected = false;
  }

  colourTypeHoodieRed() {
    this.isBlackTypeHoodieSelected = false;
    this.isGreyTypeHoodieSelected = false;
    this.isNavyTypeHoodieSelected = false;
    this.isRedTypeHoodieSelected = true;
  }

  isGreyLogoTshirtSelected = true;
  isBlackLogoTshirtSelected = false;
  isWhiteLogoTshirtSelected = false;

  colourLogoTshirtGrey() {
    this.isGreyLogoTshirtSelected = true;
    this.isBlackLogoTshirtSelected = false;
    this.isWhiteLogoTshirtSelected = false;
  }

  colourLogoTshirtBlack() {
    this.isGreyLogoTshirtSelected = false;
    this.isBlackLogoTshirtSelected = true;
    this.isWhiteLogoTshirtSelected = false;
  }

  colourLogoTshirtWhite() {
    this.isGreyLogoTshirtSelected = false;
    this.isBlackLogoTshirtSelected = false;
    this.isWhiteLogoTshirtSelected = true;
  }

  isBlackTypeTshirtSelected = true;
  isGreyTypeTshirtSelected = false;
  isWhiteTypeTshirtSelected = false;

  colourTypeTshirtBlack() {
    this.isBlackTypeTshirtSelected = true;
    this.isGreyTypeTshirtSelected = false;
    this.isWhiteTypeTshirtSelected = false;
  }

  colourTypeTshirtGrey() {
    this.isBlackTypeTshirtSelected = false;
    this.isGreyTypeTshirtSelected = true;
    this.isWhiteTypeTshirtSelected = false;
  }

  colourTypeTshirtWhite() {
    this.isBlackTypeTshirtSelected = false;
    this.isGreyTypeTshirtSelected = false;
    this.isWhiteTypeTshirtSelected = true;
  }

  isWhiteLogoFittedSelected = true;
  isBlackLogoFittedSelected = false;

  colourLogoFittedWhite() {
    this.isWhiteLogoFittedSelected = true;
    this.isBlackLogoFittedSelected = false;
  }

  colourLogoFittedBlack() {
    this.isWhiteLogoFittedSelected = false;
    this.isBlackLogoFittedSelected = true;
  }

  isWhiteTypeFittedSelected = true;
  isBlackTypeFittedSelected = false;

  colourTypeFittedWhite() {
    this.isWhiteTypeFittedSelected = true;
    this.isBlackTypeFittedSelected = false;
  }

  colourTypeFittedBlack() {
    this.isWhiteTypeFittedSelected = false;
    this.isBlackTypeFittedSelected = true;
  }

}
