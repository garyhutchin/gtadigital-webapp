import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { LatestNews } from '../../models/content-interface'
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class LatestNewsService {
    
    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    }

    getNewsItems() {
        return this.http.get<{ [key: string]: LatestNews }>('https://gta-digital-web-app.firebaseio.com/latest-news.json')
        .pipe(map(responseData => {
            const newsItemsArray: LatestNews[] = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    newsItemsArray.push({ ...responseData[key], id: key })
                }
            }
            return newsItemsArray;
        })
        );
    }

}

/*const NEWSITEMS = [
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Flatest-news-images%2FfnoobCover-October.jpg?alt=media&token=d11c93d4-db4f-4cd5-bf66-617b7d8521c0",
        info: "GTA Digital Presents returns for the October installment of the show on 6 October. From this show onwards, GTA Digital Presents will air from 6-7pm, every 4 weeks. I plan on playing tracks by the likes of Wetworks, Henry Cullen, J-T Kyrke, David Moleon & Rowlanz to name just a few. So as always, expect an hour of seriously banging techno. You can tune into the show over at ",
        externalUrl : "https://fnoobtechno.com",
        externalUrlTitle : "Fnoob Techno Radio",
        externalUrlImage: "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2Fexternal-link.png?alt=media&token=cd7f4861-315a-4c83-9bab-502bc919a029",
        newsItem: 6,
        title: "GTA Digital Presents - October 2020"  
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fpodcast%2Fpodcast31.jpg?alt=media&token=965c65c2-4810-4773-9b8f-4fd56eeb26ce",
        info: "The next installment in the GTA Digital Podcast Series is online now. An all vinyl hard techno set this time around.",
        internalUrl: "/music/podcasts/podcast/31",
        internalUrlTitle: "Find out more",
        moreInfo: "Tracks by the likes of Mike Humphries, W.J Henze, DJ Mika, Patrick DSP, Dirty Bass & Kay D Smith",
        newsItem: 5,
        title: "GTA Digital Podcast #31"  
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Flatest-news-images%2Fpodcast30.jpg?alt=media&token=b272a779-720a-42ff-973e-5373787cc218",
        info: "The GTA Digital Podcast is back with the 30th installment. As always you can expect an hour of straight up, straight forward, hard banging techno.",
        internalUrl: "/music/podcasts/podcast/30",
        internalUrlTitle: "Find out more",
        moreInfo: "Tracks by the likes of Vincent de Wit, Mattias Fridell, Lars Klein & Concrete Djz.",
        newsItem: 4,
        title: "GTA Digital Podcast #30"  
    },
    {
        externalLinkImage : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2Fexternal-link.png?alt=media&token=cd7f4861-315a-4c83-9bab-502bc919a029",
        externalUrl : "https://fnoobtechno.com",
        externalUrlTitle : "Fnoob Techno Radio",
        externalUrlImage: "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2Fexternal-link.png?alt=media&token=cd7f4861-315a-4c83-9bab-502bc919a029",
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Flatest-news-images%2FfnoobCover.jpg?alt=media&token=ff2cdb44-30ad-4fcd-bb6d-c1ae64326a51",
        info : "GTA Digital Presents returns for the September installment of the show. If you have tuned in to previous shows you know what to expect by now, straight up, solid techno. The show airs on 15 September from 10-11pm, over at ",
        newsItem : 5,
        title : "GTA Digital Presents - September 2020"
    },
    {
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Flatest-news-images%2Fpodcast29.jpg?alt=media&token=9416cf60-d261-48f8-9163-d89a15af3167",
        info : "Podcast 29, you know the score, straight up banging techno. For this podcast I put together an hour set using tracks released on Armatura Clandestine. Some real solid, seriously banging hard techno. ",
        internalUrl : "/music/podcasts/podcast/29",
        internalUrlTitle : "Listen Now",
        newsItem : 3,
        title : "GTA Digital Podcast #29"
    },
    {
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Flatest-news-images%2Fpodcast29.jpg?alt=media&token=9416cf60-d261-48f8-9163-d89a15af3167",
        info : "You can check out this podcast",
        internalUrl : "/music/podcasts/podcast/29",
        internalUrlTitle : "Listen Now",
        newsItem : 2,
        title : "News Item 3"   
    },
    {
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Flatest-news-images%2Fpodcast29.jpg?alt=media&token=9416cf60-d261-48f8-9163-d89a15af3167",
        info : "You can check out this podcast ",
        internalUrl : "/music/podcasts/podcast/29",
        internalUrlTitle : "Listen Now",
        newsItem : 1,
        title : "News Item 4" 
    },
]*/