import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Podcast } from '../../../models/content-interface';

@Component({
  selector: 'you-may-like-podcast',
  templateUrl: './you-may-like-podcast.component.html',
  styleUrls: ['./you-may-like-podcast.component.css']
})
export class YouMayLikePodcastComponent implements OnInit {

  podcastsList: AngularFireList<Podcast>
  podcasts: Observable<Podcast[]>

  start : number = 0;
  end : number = 5;
  releaseNumber: number;

  constructor( private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private router: Router, private afd: AngularFireDatabase) {

  }

  ngOnInit() {

    this.podcastsList = this.afd.list('podcasts')
    this.podcasts = this.podcastsList.valueChanges()

    this.activatedRoute.url.subscribe(url =>{
  
      this.releaseNumber = this.activatedRoute.snapshot.params['id']
  
      if (this.releaseNumber > 25) {
        return this.end = 6
      }
      
  });
  }
 
}