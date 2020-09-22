import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser';



@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class AboutComponent implements OnInit {

  aboutContent: any

  constructor(private contentService: ContentService, private title: Title, private meta: Meta) { 

  }

  ngOnInit() {
    this.aboutContent = this.contentService.getAboutContent('about')
    this.title.setTitle(this.aboutContent.title);
  }

}
