import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Navigation } from '../../models/content-interface';

@Component ({
    selector: 'tab-nav',
    templateUrl: 'tab-nav.component.html',
    styleUrls: ['tab-nav.component.css'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
              style({ opacity: 0 }), animate('0.2s ease-in', style({ opacity: 1 }))]
            ),
            transition(':leave',
              [style({ opacity: 1 }), animate('0.2s ease-out', style({ opacity: 0 }))]
            )
          ])
    ]
})

export class TabNavComponent implements OnInit {
    
  navItemsCollection: AngularFirestoreCollection<Navigation>
  navItems: Observable<Navigation[]>

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
      this.navItemsCollection = this.afs.collection('navigation', ref => {
          return ref.orderBy('id', 'asc')
      })
      this.navItems = this.navItemsCollection.valueChanges()
  }

  isCollapsed: boolean = true;

  toggleTabNav() {
      this.isCollapsed = !this.isCollapsed;
  }

}