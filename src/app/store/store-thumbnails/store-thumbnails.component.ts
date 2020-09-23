import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'store-thumbnail',
  templateUrl: './store-thumbnails.component.html',
  styleUrls: ['../../css/thumbnails.component.css']
})
export class StoreThumbnailsComponent implements OnInit {

  @Input() storeItem: any

  constructor() { }

  ngOnInit(): void {
  }

}
