import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../css/main-structure.component.css'],
  animations: [

    trigger('heroAnim', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ])
    ]),

    trigger('formAnim', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1s 0.5s ease-in', style({ opacity: 1 }))
      ])
    ])

  ]
})
export class ContactComponent implements OnInit {

  contactContent: any

  constructor(private contentService: ContentService, private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.contactContent = this.activatedRoute.snapshot.data['contactPage']

    //set tags for SEO
    this.title.setTitle(this.contactContent.title);
    this.meta.updateTag({ name: 'description', content: this.contactContent.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' })
  }

}
