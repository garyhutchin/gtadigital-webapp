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

  homeContentDoc: AngularFirestoreDocument<Content>;
  homeContent: Observable<Content>;

  constructor(private contentService: ContentService, private afs: AngularFirestore) { 

  }

  ngOnInit() {

    this.homeContentDoc = this.afs.doc('main-content/home')
    this.homeContent = this.homeContentDoc.valueChanges()

  }

}
