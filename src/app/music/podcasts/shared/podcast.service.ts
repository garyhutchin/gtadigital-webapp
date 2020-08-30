import { Injectable } from '@angular/core'

@Injectable()
export class PodcastService {
    getPodcasts() {
        return PODCASTS
    }
}

const PODCASTS = [
    {
        id: 'podcast-30',
        title: 'GTA Digital Podcast #30',
        artistName: 'mixed by Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast30.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast30.jpg',
        style: 'Hard Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-29',
        title: 'GTA Digital Podcast #29',
        artistName: 'mixed by Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast29.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast30.jpg',
        style: 'Hard Techno',
        duration: '1hr'
    }
]