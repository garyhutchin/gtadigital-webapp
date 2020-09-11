import { Component, Input } from '@angular/core';

@Component({
    selector: 'tab-nav-items',
    templateUrl: 'tab-nav-items.component.html',
    styleUrls: ['../tab-nav.component.css']
})

export class TabNavItems {

    @Input() navItem: any

}