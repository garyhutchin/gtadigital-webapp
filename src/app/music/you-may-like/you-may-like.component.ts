import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Release } from '../../models/content-interface';

@Component({
  selector: 'you-may-like',
  templateUrl: './you-may-like.component.html',
  styleUrls: ['./you-may-like.component.css']
})
export class YouMayLikeComponent implements OnInit {
  releasesList: AngularFireList<Release>
  releases: Observable<Release[]>

  start : number = 0;
  end : number = 5;
  releaseNumber: number;

  constructor( private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, private afd: AngularFireDatabase) {

  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url =>{
      this.releasesList = this.afd.list('releases')
    this.releases = this.releasesList.valueChanges()
  
      this.releaseNumber = this.activatedRoute.snapshot.params['id']
  
      if (this.releaseNumber > 15) {
        return this.end = 6
      }
  });
  }
 
}

