import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { ContentService } from '../../shared/content.service'

@Injectable({providedIn: 'root'})
export class StoreItemThreeResolver implements Resolve<any> {
    constructor(private contentService: ContentService) {

    }

    resolve() {
        return this.contentService.getStoreItem('3');
    }
}