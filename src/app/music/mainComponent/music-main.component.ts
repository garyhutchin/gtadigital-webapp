import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component ({
    selector: 'music-main',
    templateUrl: 'music-main.component.html',
    styleUrls: ['music-main.component.css']
})

export class MusicMainComponent implements OnInit {

    constructor(private router: Router) {
        
    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }

}