import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class StoreComponent implements OnInit {

  storeItems: any
  storeContent: any

  constructor(private contentService: ContentService, private title: Title, private meta: Meta) { }

  ngOnInit() {

    this.storeItems = this.contentService.getStoreItems()
    this.storeContent = this.contentService.getMainContent('store')

    this.title.setTitle(this.storeContent.title);
    this.meta.updateTag({ name: 'description', content: this.storeContent.description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow'  })

  }

}
