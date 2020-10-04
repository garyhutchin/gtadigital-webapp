import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class ContactComponent implements OnInit {

  contactContent:any

  constructor(private contentService: ContentService, private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contactContent = this.activatedRoute.snapshot.data['contactPage']

      //set tags for SEO
      this.title.setTitle(this.contactContent.title);
      this.meta.updateTag({ name: 'description', content: this.contactContent.description });
      this.meta.updateTag({ name: 'robots', content: 'index, follow'  })
  }

}
