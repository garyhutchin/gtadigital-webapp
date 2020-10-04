import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { ContentService } from '../shared/content.service'

@Injectable({providedIn: 'root'})
export class ContactPageResolver implements Resolve<any> {
    constructor(private contentService: ContentService) {

    }

    resolve() {
        return this.contentService.getContactPageContent()
    }
}