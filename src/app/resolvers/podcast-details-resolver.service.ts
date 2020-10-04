import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { PodcastService } from '../music/podcasts/shared/podcast.service'

@Injectable({providedIn: 'root'})
export class PodcastResolver implements Resolve<any> {
    constructor(private podcastService: PodcastService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.podcastService.getPodcast(route.params['id'])
    }
}