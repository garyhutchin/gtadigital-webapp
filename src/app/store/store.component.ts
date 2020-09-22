import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class StoreComponent implements OnInit {

  storeItems: any

  constructor(private contentService: ContentService) { }

  ngOnInit() {

    this.storeItems = this.contentService.getStoreItems()

  }

}
