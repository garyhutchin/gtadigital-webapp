import { Injectable } from '@angular/core';

@Injectable()

export class LatestNewsService {
    getNewsItems() {
        return NEWSITEMS
    }
}

const NEWSITEMS = [
    {
        title: 'GTA Digital Podcast #30',
        info: 'The GTA Digital Podcast is back with the 30th installment. As always you can expect an hour of straight up, straight forward, hard banging techno. Tracks by the likes of Vincent de Wit, Mattias Fridell, Lars Klein & Concrete Djz. ',
        imageUrl: './assets/images/card-images/latest-news-images/podcast30.jpg',    
        internalUrl: '/music/podcasts/podcast-30',
        internalUrlTitle: 'Listen here.'    
    },
    {
        title: 'GTA Digital Presents - September 2020',
        info: 'GTA Digital Presents returns for the September installment of the show. If you have tuned in to previous shows you know what to expect by now, straight up, solid techno. The show airs on 15 September from 10-11pm, over at ',
        imageUrl: './assets/images/card-images/latest-news-images/fnoobCover.jpg',
        externalUrl: 'https://fnoobtechno.com',
        externalUrlTitle: 'Fnoob Techno Radio'
    },
    {
        title: 'GTA Digital Podcast #29',
        info: 'Podcast 29, you know the score, straight up banging techno. For this podcast I put together an hour set using tracks released on Armatura Clandestine. Some real solid, seriously banging hard techno. ',
        imageUrl: './assets/images/card-images/latest-news-images/podcast29.jpg',
        internalUrl: '/music/podcasts/podcast-29',
        internalUrlTitle: 'Listen here.'  
    },
    {
        title: 'News Item 3',
        info: 'You can check out this podcast ',
        imageUrl: './assets/images/card-images/latest-news-images/podcast29.jpg',
        internalUrl: '/music/podcasts/podcast-29',
        internalUrlTitle: 'here'    
    },
    {
        title: 'News Item 4',
        info: 'You can check out this podcast ',
        imageUrl: './assets/images/card-images/latest-news-images/podcast29.jpg' ,  
        internalUrl: '/music/podcasts/podcast-29',
        internalUrlTitle: 'here'  
    },
]