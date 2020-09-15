import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import { ContentService } from '../shared/content.service';
import { AngularFirestore ,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Content } from '../models/content-interface';

@Component ({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['../css/main-structure.component.css'],
    animations: [

        trigger('heroAnim', [
  
            transition('* => *', [
    
              query(':self', style({ opacity: 0}), {optional: true}),
    
              query(':self', stagger('300ms', [
                animate('1.5s ease-in', keyframes([
                  style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
                  style({opacity: .5, transform: 'translateX(0px)', offset: 0.3}),
                  style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
                ]))
              ]), {optional: true})
    
            ])
    
          ]),

        trigger('headerAnim', [
  
          transition('* => *', [
  
            query(':self', style({ opacity: 0 }), {optional: true}),
  
            query(':self', stagger('300ms', [
              animate('1s 0.9s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
                style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
              ]))
            ]))
  
          ])
  
        ]),

        trigger('liveStreamAnim', [
  
            transition('* => *', [
    
              query(':self', style({ opacity: 0}), {optional: true}),
    
              query(':self', stagger('300ms', [
                animate('0.5s 3s ease-in', keyframes([
                  style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
                  style({opacity: .5, transform: 'translateX(0px)', offset: 0.3}),
                  style({opacity: 1, transform: 'translateX(0px)', offset: 1}),
                ]))
              ]))
    
            ])
    
          ]),
  
      ]
})

export class MainComponent implements OnInit {
  
    homeContentDoc: AngularFirestoreDocument<Content>;
    homeContent: Observable<Content>;
    
    constructor(private router:Router, private contentService: ContentService, private afs: AngularFirestore) {

    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });

        this.homeContentDoc = this.afs.doc('main-content/home')
        this.homeContent = this.homeContentDoc.valueChanges()
    }

    listenNow() {
        this.router.navigate(['music'])
    }

}