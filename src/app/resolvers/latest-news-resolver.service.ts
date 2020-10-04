import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { LatestNewsService } from '../main/shared/latest-news.service'

@Injectable({providedIn: 'root'})
export class LatestNewsResolver implements Resolve<any> {
    constructor(private latestNewsService: LatestNewsService) {

    }

    resolve() {
        return this.latestNewsService.getNewsItems()
    }
}