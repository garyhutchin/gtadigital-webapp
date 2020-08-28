import { Injectable } from '@angular/core';

@Injectable()

export class LatestNewsService {
    getNewsItems() {
        return NEWSITEMS
    }
}

const NEWSITEMS = [
    {
        title: 'New Item',
        info: 'New Item',
        imageUrl: './assets/images/card-images/latest-news-images/item1.jpg'    
    },
    {
        title: 'GTA Digital Presents - September 2020',
        info: 'GTA Digital Presents returns for the September installment of the show. If you have tuned in to previous shows you know what to expect by now, straight up, solid techno. The show airs on 15 September from 10-11pm, over at Fnoob Techno Radio',
        imageUrl: './assets/images/card-images/latest-news-images/fnoobCover.jpg'    
    },
    {
        title: 'News Item 2',
        info: 'News Item 2',
        imageUrl: './assets/images/card-images/latest-news-images/podcast30.jpg'    
    },
    {
        title: 'News Item 3',
        info: 'News Item 3',
        imageUrl: './assets/images/card-images/latest-news-images/podcast29.jpg'    
    },
    {
        title: 'News Item 4',
        info: 'News Item 4',
        imageUrl: './assets/images/card-images/latest-news-images/podcast29.jpg'    
    },
]