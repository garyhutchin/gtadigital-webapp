import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore ,AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs';
import { Release } from '../../models/content-interface';

@Component({
  selector: 'you-may-like',
  templateUrl: './you-may-like.component.html',
  styleUrls: ['./you-may-like.component.css']
})
export class YouMayLikeComponent implements OnInit {
  releasesCollection: AngularFirestoreCollection<Release>
  releases: Observable<Release[]>

  start : number = 0;
  end : number = 5;
  releaseNumber: number;

  constructor( private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{
      this.releasesCollection = this.afs.collection('releases', ref => {
        return ref.orderBy('id', 'desc')
    })
    this.releases = this.releasesCollection.valueChanges()
  
      this.releaseNumber = this.activatedRoute.snapshot.params['id']
  
      if (this.releaseNumber > 15) {
        return this.end = 6
      }
  });
  }
 
}

