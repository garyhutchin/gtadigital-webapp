import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'you-may-like',
  templateUrl: './you-may-like.component.html',
  styleUrls: ['./you-may-like.component.css']
})
export class YouMayLikeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToGTA18(){
    this.router.navigate(['/releases/gta18'])
  }
  
}

