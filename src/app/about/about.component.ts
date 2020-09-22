import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';



@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class AboutComponent implements OnInit {

  aboutContent: any

  constructor(private contentService: ContentService) { 

  }

  ngOnInit() {
    this.aboutContent = this.contentService.getAboutContent('about')
  }

}
