import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { ReleaseService } from './releases.service'
import { map } from 'rxjs/operators'

@Injectable()
export class ReleaseListResolver implements Resolve<any> {
    constructor(private releaseService: ReleaseService) {

    }

    resolve() {
        return this.releaseService.getReleases().pipe(map(releases => releases))
    }
}