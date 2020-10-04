import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { ReleaseService } from '../music/releases/shared/releases.service'

@Injectable({providedIn: 'root'})
export class ReleaseListResolver implements Resolve<any> {
    constructor(private releaseService: ReleaseService) {

    }

    resolve() {
        return this.releaseService.getReleases()
    }
}