import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { MostPopularService } from '../../main/shared/most-pop.service'

@Injectable({providedIn: 'root'})
export class MostPopularReleaseResolver implements Resolve<any> {
    constructor(private mostPopularService: MostPopularService) {

    }

    resolve() {
        return this.mostPopularService.getReleaseItems()
    }
}