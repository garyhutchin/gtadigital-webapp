import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['../css/main-structure.component.css', '../css/thumbnails.component.css', '../css/card-structure.component.css']
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

    this.contentService.getStoreItem('1').subscribe(storeItem => {
      this.logoHoodie = storeItem
    })

    this.contentService.getStoreItem('2').subscribe(storeItem => {
      this.typeHoodie = storeItem
    })

    this.contentService.getStoreItem('3').subscribe(storeItem => {
      this.logoTshirtRegular = storeItem
    })

    this.contentService.getStoreItem('4').subscribe(storeItem => {
      this.typeTshirtRegular = storeItem
    })

    this.contentService.getStoreItem('5').subscribe(storeItem => {
      this.logoTshirtFitted = storeItem
    })
    
    this.contentService.getStoreItem('6').subscribe(storeItem => {
      this.typeTshirtFitted = storeItem
    })

    this.contentService.getStoreItem('7').subscribe(storeItem => {
      this.gtaDigitalMug = storeItem
    })

    this.contentService.getStoreItem('8').subscribe(storeItem => {
      this.gtaDigitalToteBag = storeItem
    })

      this.storeContent = this.activatedRoute.snapshot.data['merch']

      this.title.setTitle(this.storeContent.title);
      this.meta.updateTag({ name: 'description', content: this.storeContent.description });
      this.meta.updateTag({ name: 'robots', content: 'index, follow'  })

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

  colourTypeTshirtBlack(){
    this.isBlackTypeTshirtSelected = true;
    this.isGreyTypeTshirtSelected = false;
    this.isWhiteTypeTshirtSelected = false;
  }

  colourTypeTshirtGrey(){
    this.isBlackTypeTshirtSelected = false;
    this.isGreyTypeTshirtSelected = true;
    this.isWhiteTypeTshirtSelected = false;
  }

  colourTypeTshirtWhite(){
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
