import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators'

declare let gtag;
 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})
export class AppComponent implements OnInit {

  navEndEvents: any;
  showLoading: boolean;

  constructor(private router: Router) {

  }

  ngOnInit() {

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoading = true;
      }

      if (routerEvent instanceof NavigationEnd) {
        this.showLoading = false;
      }

    })

    this.navEndEvents = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );
    this.navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-134474308-1', {
        'page_path': event.urlAfterRedirects
      });

    });
  }

}
