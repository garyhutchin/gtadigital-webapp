import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { Observable } from 'rxjs';
import { Content } from '../../models/content-interface';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

@Component({
  selector: 'live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {

  homeContentDoc: AngularFireObject<Content>;
  homeContent: Observable<Content>;

  constructor(private contentService: ContentService, private afd: AngularFireDatabase) { 

  }

  ngOnInit() {

    this.homeContentDoc = this.afd.object('main-content/home')
    this.homeContent = this.homeContentDoc.valueChanges()

  }

}
