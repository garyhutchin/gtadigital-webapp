import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Content } from '../models/content-interface';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['../css/main-structure.component.css']
})
export class AboutComponent implements OnInit {

  aboutContentDoc: AngularFireObject<Content>;
  aboutContent: Observable<Content>;

  constructor(private afd: AngularFireDatabase) { 

  }

  ngOnInit() {

    this.aboutContentDoc = this.afd.object('main-content/about')
    this.aboutContent = this.aboutContentDoc.valueChanges()

  }

}
