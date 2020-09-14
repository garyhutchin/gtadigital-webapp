import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/shared/content.service';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Content } from '../../models/content-interface';

@Component({
  selector: 'live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.css']
})
export class LiveStreamComponent implements OnInit {

  homeContentCollection: AngularFirestoreCollection<Content>;
  homeContent: Observable<Content[]>;

  constructor(private contentService: ContentService, private afs: AngularFirestore) { 

  }

  ngOnInit() {

    this.homeContentCollection = this.afs.collection('main-content')
    this.homeContent = this.homeContentCollection.valueChanges()

  }

}
