import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';

@Component({
  selector: 'store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['../../css/card-structure.component.css']
})
export class StoreListComponent implements OnInit {

  storeItems: any

  constructor(private contentService: ContentService) { }

  ngOnInit() {

    this.storeItems = this.contentService.getStoreItems()

  }

}
