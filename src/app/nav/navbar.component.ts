import { Component } from '@angular/core';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component ({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css'],
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

export class NavBarComponent {
    isCollapsed: boolean = true;

    toggleTabNav() {
        this.isCollapsed = !this.isCollapsed;
    }

}