import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentService } from 'src/app/shared/content.service';
import { ThrowStmt } from '@angular/compiler';

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
    
    navItems: any[]

    constructor(private contentService: ContentService) {

    }

    isCollapsed: boolean = true;

    toggleTabNav() {
        this.isCollapsed = !this.isCollapsed;
    }

    ngOnInit() {
      this.navItems = this.contentService.getNavItems()
    }

}