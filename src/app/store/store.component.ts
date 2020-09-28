import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser';

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

  constructor(private contentService: ContentService, private title: Title, private meta: Meta) { }

  ngOnInit() {

    this.logoHoodie = this.contentService.getStoreItem('logo-hoodie')
    this.typeHoodie = this.contentService.getStoreItem('type-hoodie')
    this.logoTshirtRegular = this.contentService.getStoreItem('logo-tshirt-regular')
    this.typeTshirtRegular = this.contentService.getStoreItem('type-tshirt-regular')
    this.logoTshirtFitted = this.contentService.getStoreItem('logo-tshirt-fitted')
    this.typeTshirtFitted = this.contentService.getStoreItem('type-tshirt-fitted')
    this.gtaDigitalMug = this.contentService.getStoreItem('gtadigital-mug')
    this.gtaDigitalToteBag = this.contentService.getStoreItem('gtadigital-tote-bag')

    this.storeContent = this.contentService.getMainContent('store')

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
