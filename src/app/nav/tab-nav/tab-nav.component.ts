import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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
    
  navItemsList: AngularFireList<Navigation>
  navItems: Observable<Navigation[]>

  constructor(private afd: AngularFireDatabase) {

  }

  ngOnInit() {
    this.navItemsList = this.afd.list('navigation')
    this.navItems = this.navItemsList.valueChanges()
  }

  isCollapsed: boolean = true;

  toggleTabNav() {
      this.isCollapsed = !this.isCollapsed;
  }

}