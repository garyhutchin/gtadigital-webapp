import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class ContactComponent implements OnInit {

  contactContent:any

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contactContent = this.contentService.getContactContent('contact')
  }

}
