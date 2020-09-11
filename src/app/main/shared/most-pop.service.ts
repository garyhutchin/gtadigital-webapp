import { Injectable } from '@angular/core';

@Injectable()
export class MostPopularService {

    getReleaseItems() {
        return RELEASEITEMS
    }

    getPodcastItems() {
        return PODCASTITEMS
    }
}

const RELEASEITEMS = [
    {   /*Add latest release first*/
        id: 20,
        cardHeader: 'Latest Release',
        title: 'Purist EP',
        artistName: 'Ungrateful Ambassador',
        catNo: '[GTA020]',
        imageUrl: './assets/images/card-images/most-popular-images/newRelease.jpg'
    },
    {
        id: 0o2,
        cardHeader: 'Most Popular Release',
        title: 'The Brass Continent',
        artistName: 'Jamie Ball',
        catNo: '[GTA002]',
        imageUrl: './assets/images/card-images/most-popular-images/mostPopRelease.jpg'
    }
]
    
const PODCASTITEMS = [
    {
        id: 30,
        cardHeader: 'Latest Podcast',
        title: 'GTA Digital Podcast #30',
        artistName: 'mixed by Gary The Apprentice',
        musicStyle: 'Style: Hard Techno',
        imageUrl: './assets/images/card-images/most-popular-images/newPodcast.jpg'
    },
    {
        id: 7,
        cardHeader: 'Most Popular Podcast',
        title: 'GTA Digital Podcast #7',
        artistName: 'mixed by Gary The Apprentice',
        musicStyle: 'Style: Chunky, Hypnotic Techno',
        imageUrl: './assets/images/card-images/most-popular-images/mostPopPodcast.jpg'
    }
]