import { Injectable } from '@angular/core';

@Injectable()

export class LatestNewsService {
    getNewsItems() {
        return NEWSITEMS
    }
}

const NEWSITEMS = [
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Flatest-news-images%2Fpodcast30.jpg?alt=media&token=b272a779-720a-42ff-973e-5373787cc218",
        info: "The GTA Digital Podcast is back with the 30th installment. As always you can expect an hour of straight up, straight forward, hard banging techno.",
        internalUrl: "/music/podcasts/podcast/30",
        internalUrlTitle: "Listen Now",
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
]