import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Content } from '../models/content-interface';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class AboutComponent implements OnInit {

  aboutContentDoc: AngularFirestoreDocument<Content>;
  aboutContent: Observable<Content>;

  constructor(private contentService: ContentService, private afs: AngularFirestore) { 

  }

  ngOnInit() {

    this.aboutContentDoc = this.afs.doc('main-content/about')
    this.aboutContent = this.aboutContentDoc.valueChanges()

  }

}
