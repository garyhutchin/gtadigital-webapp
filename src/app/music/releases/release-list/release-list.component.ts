import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component ({
    selector: 'release-list',
    templateUrl: 'release-list.component.html',
    styleUrls: ['release-list.component.css'],
    animations: [
        trigger('fadeIn', [
            transition(':enter', [
              style({ opacity: 0 }), animate('0.5s ease-in', style({ opacity: 1 }))]
            ),
            transition(':leave',
              [style({ opacity: 1 }), animate('0.2s ease-out', style({ opacity: 0 }))]
            )
          ])
    ]
})

export class ReleaseListComponent {
    btnDefaultStatus = 'View All';
    isCollapsed: boolean = true;
    
    constructor(private router:Router) {
        
    }
    
    toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
        
        if (!this.isCollapsed)
        return this.btnDefaultStatus = 'Close'
        
        if (this.isCollapsed)
        return this.btnDefaultStatus = 'View All'
    }

    goToGTA19() {
        this.router.navigate(['/releases/gta19'])
    }

    goToGTA18() {
        this.router.navigate(['/releases/gta18'])
    }

    goToGTA17() {
        this.router.navigate(['/releases/gta17'])
    }

    goToGTA16() {
        this.router.navigate(['/releases/gta16'])
    }

    goToGTA15() {
        this.router.navigate(['/releases/gta15'])
    }

    goToGTA14() {
        this.router.navigate(['/releases/gta14'])
    }

    goToGTA13() {
        this.router.navigate(['/releases/gta13'])
    }

    goToGTA12() {
        this.router.navigate(['/releases/gta12'])
    }

    goToGTA11() {
        this.router.navigate(['/releases/gta11'])
    }

    goToGTA10() {
        this.router.navigate(['/releases/gta10'])
    }

    goToGTA9() {
        this.router.navigate(['/releases/gta09'])
    }

    goToGTA8() {
        this.router.navigate(['/releases/gta08'])
    }

    goToGTA7() {
        this.router.navigate(['/releases/gta07'])
    }

    goToGTA6() {
        this.router.navigate(['/releases/gta06'])
    }

    goToGTA5() {
        this.router.navigate(['/releases/gta05'])
    }

    goToGTA4() {
        this.router.navigate(['/releases/gta04'])
    }

    goToGTA3() {
        this.router.navigate(['/releases/gta03'])
    }

    goToGTA2() {
        this.router.navigate(['/releases/gta02'])
    }

    goToGTA1() {
        this.router.navigate(['/releases/gta01'])
    }

}