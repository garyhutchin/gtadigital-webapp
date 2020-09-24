import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class ContactComponent implements OnInit {

  contactContent:any

  constructor(private contentService: ContentService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.contactContent = this.contentService.getMainContent('contact')

    //set tags for SEO
    this.title.setTitle(this.contactContent.title);
    this.meta.updateTag({ name: 'description', content: this.contactContent.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow'  })
  }

}
