import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-items',
    templateUrl: 'nav-items.component.html',
    styleUrls: ['../desktop-nav.component.css']
})

export class NavItems {
    @Input() navItem: any
}