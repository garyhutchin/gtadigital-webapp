import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { ReleaseService } from '../shared/releases.service'

@Injectable({providedIn: 'root'})
export class ReleaseResolver implements Resolve<any> {
    constructor(private releaseService: ReleaseService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.releaseService.getRelease(route.params['id'])
    }
}