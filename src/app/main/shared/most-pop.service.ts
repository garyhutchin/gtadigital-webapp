import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { Release, Podcast } from '../../models/content-interface'

@Injectable()
export class MostPopularService {

    constructor(private http: HttpClient) {}

    //FETCH MOST POPULAR RELEASES FROM FIREBASE DATABASE
    getReleaseItems():Observable<Release[]> {
        return this.http.get<Release[]>('https://gta-digital-web-app.firebaseio.com/most-popular-release.json') 
        .pipe(catchError(this.handleError<Release[]>('getReleaseItems', [])))       
    }

    //FETCH MOST POPULAR RELEASES FROM FIREBASE DATABASE
    getPodcastItems() {
        return this.http.get<Podcast[]>('https://gta-digital-web-app.firebaseio.com/most-popular-podcast.json')
        .pipe(catchError(this.handleError<Podcast[]>('getPodcastItems', [])))
    }

    //ERROR HANDLING, NOT YET UTILISED AND MAY BE REPLACED
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}

const RELEASEITEMS = [
    /*{ 
        artistName : "Ungrateful Ambassador",
        cardHeader : "Latest Release",
        catNo : "[GTA020]",
        id : 20,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fmost-popular-images%2FnewRelease.jpg?alt=media&token=5e21a4e2-66d1-4b21-b165-f84a9e435b7f",
        title : "Purist EP"
    },*/
    {
        artistName : "Gary The Apprentice",
        cardHeader : "Latest Release",
        catNo : "[GTA019]",
        id : 19,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta019.jpg?alt=media&token=a5771348-e5c5-4ea6-8b13-43ec273cf6ac",
        title : "Unix EP"
    },
    {
        artistName : "Jamie Ball",
        cardHeader : "Most Popular Release",
        catNo : "[GTA002]",
        id : 2,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta002.jpg?alt=media&token=beef0183-f6de-4e03-ad79-5c4a757379ea",
        title : "The Brass Continent"
    }
]
    
const PODCASTITEMS = [
    {
        artistName : "mixed by Gary The Apprentice",
        cardHeader : "Latest Podcast",
        id : "31",
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fpodcast%2Fpodcast31.jpg?alt=media&token=965c65c2-4810-4773-9b8f-4fd56eeb26ce",
        musicStyle : "Style: Hard Techno",
        title : "GTA Digital Podcast #31"
    },
    {
        artistName : "mixed by Gary The Apprentice",
        cardHeader : "Most Popular Podcast",
        id : "7",
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Fpodcast%2Fpodcast7.jpg?alt=media&token=cf233b89-4422-472b-aec1-ec98d1aa47d4",
        musicStyle : "Style: Chunky, Hypnotic Techno",
        title : "GTA Digital Podcast #7"
    }
]