import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { PodcastService } from '../music/podcasts/shared/podcast.service'

@Injectable({providedIn: 'root'})
export class PodcastListResolver implements Resolve<any> {
    constructor(private podcastService: PodcastService) {

    }

    resolve() {
        return this.podcastService.getPodcasts()
    }
}