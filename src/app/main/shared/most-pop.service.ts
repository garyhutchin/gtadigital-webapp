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
        artistName : "Ungrateful Ambassador",
        cardHeader : "Latest Release",
        catNo : "[GTA020]",
        id : 20,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fmost-popular-images%2FnewRelease.jpg?alt=media&token=5e21a4e2-66d1-4b21-b165-f84a9e435b7f",
        title : "Purist EP"
    },
    {
        artistName : "Jamie Ball",
        cardHeader : "Most Popular Release",
        catNo : "[GTA002]",
        id : 2,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fmost-popular-images%2FmostPopRelease.jpg?alt=media&token=65256437-0802-4467-a824-0300193e8322",
        title : "The Brass Continent"
    }
]
    
const PODCASTITEMS = [
    {
        artistName : "mixed by Gary The Apprentice",
        cardHeader : "Latest Podcast",
        id : "30",
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fmost-popular-images%2FnewPodcast.jpg?alt=media&token=510e927a-cb16-4f9f-bc83-30d9dc6ce0cf",
        musicStyle : "Style: Hard Techno",
        title : "GTA Digital Podcast #30"
    },
    {
        artistName : "mixed by Gary The Apprentice",
        cardHeader : "Most Popular Podcast",
        id : "7",
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fmost-popular-images%2FmostPopPodcast.jpg?alt=media&token=16981a17-1402-4daf-9c2d-5f17d5128d41",
        musicStyle : "Style: Chunky, Hypnotic Techno",
        title : "GTA Digital Podcast #7"
    }
]