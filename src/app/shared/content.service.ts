import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { Observable, of } from 'rxjs'
import { Content, LiveStreamArchive, Navigation, SocialMedia, StoreItem } from '../models/content-interface'

@Injectable()

export class ContentService {

    constructor(private http: HttpClient) {}

    //FETCH NAVIGATION (DESKTOP AND MOBILE) CONTENT FROM FIREBASE DATABASE
    getNavItems():Observable<Navigation[]> {
        return this.http.get<Navigation[]>('https://gta-digital-web-app.firebaseio.com/navigation.json')
            .pipe(catchError(this.handleError<Navigation[]>('getNavItems', [])))
    }
    
    //FETCH HOME PAGE CONTENT FROM FIREBASE DATABASE
    getHomePageContent():Observable<Content> {
        return this.http.get<Content>('https://gta-digital-web-app.firebaseio.com/main-content/home.json')
            .pipe(catchError(this.handleError<Content>('getHomePageContent')))
    }

    //FETCH ABOUT PAGE CONTENT FROM FIREBASE DATABASE
    getAboutPageContent():Observable<Content> {
        return this.http.get<Content>('https://gta-digital-web-app.firebaseio.com/main-content/about.json')
            .pipe(catchError(this.handleError<Content>('getAboutPageContent')))
    }
    
    //FETCH MUSIC PAGE CONTENT FROM FIREBASE DATABASE
    getMusicPageContent():Observable<Content> {
        return this.http.get<Content>('https://gta-digital-web-app.firebaseio.com/main-content/music.json')
            .pipe(catchError(this.handleError<Content>('getMusicPageContent')))
    }

    //FETCH RELEASE PAGE CONTENT FROM FIREBASE DATABASE
    getReleasePageContent():Observable<Content> {
        return this.http.get<Content>('https://gta-digital-web-app.firebaseio.com/main-content/release.json')
            .pipe(catchError(this.handleError<Content>('getReleasePageContent')))
    }

    //FETCH PODCAST PAGE CONTENT FROM FIREBASE DATABASE
    getPodcastPageContent():Observable<Content> {
        return this.http.get<Content>('https://gta-digital-web-app.firebaseio.com/main-content/podcast.json')
            .pipe(catchError(this.handleError<Content>('getPodcastPageContent')))
    }
    
    //FETCH MERCH PAGE CONTENT FROM FIREBASE DATABASE
    getStorePageContent():Observable<Content> {
        return this.http.get<Content>('https://gta-digital-web-app.firebaseio.com/main-content/store.json')
            .pipe(catchError(this.handleError<Content>('getStorePageContent')))
    }

    //FETCH CONTACT PAGE CONTENT FROM FIREBASE DATABASE
    getContactPageContent():Observable<Content> {
        return this.http.get<Content>('https://gta-digital-web-app.firebaseio.com/main-content/contact.json')
            .pipe(catchError(this.handleError<Content>('getContactPageContent')))
    }

    //FETCH NAV BAR SOCIAL MEDIA IMAGES/LINKS FROM FIREBASE DATABASE
    getSocialMediaLinks():Observable<SocialMedia[]> {
        return this.http.get<SocialMedia[]>('https://gta-digital-web-app.firebaseio.com/social-media-links.json')
            .pipe(catchError(this.handleError<SocialMedia[]>('getSocialMediaLinks', [])))
    }

    //FETCH MERCH ITEMS FROM FIREBASE DATABASE
    getStoreItem(id:string):Observable<StoreItem> {
        return this.http.get<StoreItem>(`https://gta-digital-web-app.firebaseio.com/store-items/${+id}.json`)
            .pipe(catchError(this.handleError<StoreItem>('getStoreItems')))
    }

    //FETCH LIVE STREAM ARCHIVE ITEMS FROM FIREBASE DATABASE
    getLiveStreamItems():Observable<LiveStreamArchive[]> {
        return this.http.get<LiveStreamArchive[]>('https://gta-digital-web-app.firebaseio.com/live-stream-archive.json')
            .pipe(catchError(this.handleError<LiveStreamArchive[]>('getLiveStreamItems', [])))
        
    }

    //ERROR HANDLING, NOT YET UTILISED AND MAY BE REPLACED
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}

/*const NAVITEMS = [

    {
        title: 'Home',
        route: 'home'
    },
    {
        title: 'About',
        route: 'about'
    },
    {
        title: 'Music',
        route: 'music'
    },
    {
        title: 'Merch',
        route: 'merch'
    },
    {
        title: 'Contact',
        route: 'contact'
    }

]*/

/*const MAINCONTENT = [
    {
        description: 'GTA Digital is a label, podcast series and online radio show with a focus on underground techno.',
        id: 'home',
        gtaDigitalLiveHeader : "GTA Digital Live Presents",
        gtaDigitalLiveSrc : "https://www.youtube.com/embed/6xTieGgxjDQ?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1",
        gtaDigitalLiveText : "Tune into the GTA Digital Live stream to check out Gary The Apprentice playing all things techno, in full HD and crystal clear audio.</p><p>Head over to the live stream archive to check out recordings of all past streams.</p><p>Click the subscribe button below to stay notified.",
        header1 : "Latest News",
        header2 : "GTA Digital Live",
        heroButton : "Listen Now",
        heroHeader : "Underground Techno",
        heroImage : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Flogo.png?alt=media&token=899bcdcb-0a2f-4927-8930-bb8e6b509ee1",
        heroText : "GTA Digital started in 2013 as a platform for Gary The Apprentice to release his own music. Since then the label has grown, with the addition of a podcast series and more recently a monthly show on Fnoob Techno Radio",
        heroImageAlt: "GTA Digital Logo",
        title: "Underground Techno - Label - Radio Show - Podcast Series"
    },
    {
        description: 'Find out more about GTA Digital',
        id: "about",
        aboutImage : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2FaboutMe-header.jpg?alt=media&token=056609e0-72eb-4727-91a3-9e5150455c9b",
        aboutText : "GTA Digital is a net label and Podcast series, set up by Gary The Apprentice, to provide the world with proper, underground Techno, staying clear of the more popular sound that is being churned out by bigger labels.</p><p>Here at GTA Digital, we are wanting to keep things real, releasing proper Techno, by proper Techno heads. We are always on the look out for new artists to get involved, so if you like what we are doing, and feel your music fits, please get in touch with a demo for us to consider releasing on the label.</p><p>This page will be used as our main platform for all of the Podcasts on the GTA Digital Podcast Series, if you would like to get involved, and provide a mix for the Podcast, please do get in touch.</p><p>To check out our full back catalogue of releases, to get information on the artists involved, and to check out the merchandise we have on sale.",
        heroHeader : "GTA Digital",
        heroImage : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Flogo.png?alt=media&token=899bcdcb-0a2f-4927-8930-bb8e6b509ee1",
        heroText : "Label, podcast series & radio show.<br>Releasing underground techno since 2013...",
        title: "GTA Digital - Techno - About"
    },
    {
        description: 'Check out all of the releases, podcasts and past live streams',
        id: 'music',
        button1 : "View All Releases",
        button2 : "View All Podcasts",
        header1 : "Releases",
        header2 : "Podcasts",
        header3 : "GTA Digital Live Archive",
        heroButton : "Check out the latest release",
        heroHeader : "Music",
        heroText : "Check out all of the music on GTA Digital, releases, podcasts and also recordings from past live streams...",
        title: 'GTA Digital - Techno - Music'
    },
    {
        id: "under-construction",
        text: "This app is still in development - some content has been added as a placeholder"
    },
    {
        description: 'If you are a fan of GTA Digital, there are hoodies and t-shirts available to purchase, if you would like to show even more support.',
        id: 'store',
        heroHeader: 'Show Even More Support!',
        heroImage: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Flogo.png?alt=media&token=899bcdcb-0a2f-4927-8930-bb8e6b509ee1',
        heroImageAlt: 'GTA Digital Logo',
        heroText: 'If you are a fan of GTA Digital, why not purchase one of the items below.',
        title: 'GTA Digital - Techno - Merch'
    },
    {
        description: 'Description for contact page',
        id: 'contact',
        heroHeader: 'Get in touch!',
        heroImage: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Flogo.png?alt=media&token=899bcdcb-0a2f-4927-8930-bb8e6b509ee1',
        heroImageAlt: 'GTA Digital Logo',
        heroText: 'If you would like to get in touch, please complete the form below...',
        title: 'GTA Digital - Techno - Contact'
    }
]*/

/*const SOCIALMEDIALINKS = [
    {
        id: 'facebook',
        alt: 'Facebook',
        image: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2FfacebookIcon.png?alt=media&token=3e188cda-78d5-4683-989c-a1495e6791e1',
        url: 'https://facebook.com/gtadigital'
    },
    {
        id: 'twitter',
        alt: 'Twitter',
        image: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2FtwitterIcon.png?alt=media&token=e63c4b3c-e8ff-4d8b-94c6-3c164c87c3f7',
        url: 'https://twitter.com/gta_digital'
    },
    {
        id: 'instagram',
        alt: 'Instagram',
        image: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2FinstagramIcon.png?alt=media&token=0ad9ac4d-898e-467d-9d2a-55a95ed816a4',
        url: 'https://www.instagram.com/gtadigital_techno'
    },
    {
        id: 'youtube',
        alt: 'YouTube',
        image: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2FyoutubeIcon.png?alt=media&token=947fe02d-4321-4b3e-8988-fb28162b53a7',
        url: 'https://www.youtube.com/channel/UCi7G9ij_Hm7UBEuZjCRUmAw'
    },
    {
        id: 'soundcloud',
        alt: 'SoundCloud',
        image: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2FsoundcloudIcon.png?alt=media&token=39283971-d3c1-40df-98bc-511939186d66',
        url: 'https://soundcloud.com/gtadigital'
    },
    {
        id: 'hearthis',
        alt: 'HearThis',
        image: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Ficons%2FhearthisIcon.png?alt=media&token=e19258ac-f6e7-4cb9-83ec-c2e5a8a320da',
        url: 'https://hearthis.at/gtadigital-podcast-series/'
    },
]*/

/*const STOREITEMS = [
    {
        id: 'logo-hoodie',
        alt: 'Logo Hoodie',
        imageUrlGrey: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-hoodie.png?alt=media&token=032a91fe-b2c7-49d6-811b-7c25376f3814',
        imageUrlBlack: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-hoodie-blk.png?alt=media&token=a47aef4d-f398-44f2-9446-88244ceb4812',
        imageUrlNavy: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-hoodie-navy.png?alt=media&token=7c479617-e2ef-4ead-800b-a2fd438abf01',
        description: 'GTA Digital Logo Hoodie',
        price: '£25.00',
        shopUrl: 'https://www.dizzyjam.com/products/175476/'
    },
    {
        id: 'type-hoodie',
        alt: 'Type Hoodie',
        imageUrlBlack: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-hoodie.png?alt=media&token=7154489a-daaa-4318-b418-ab37c7d22eda',
        imageUrlGrey: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-hoodie-grey.png?alt=media&token=27bb5eaf-8038-4e2b-9320-208eca22c6b3',
        imageUrlNavy: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-hoodie-navy.png?alt=media&token=f4695cd4-d6c8-4399-85b3-b335f40f3fbe',
        imageUrlRed: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-hoodie-red.png?alt=media&token=abfa7344-e426-49b7-951a-b1c3237b0b1d',
        description: 'GTA Digital Type Hoodie',
        price: '£25.00',
        shopUrl: 'https://www.dizzyjam.com/products/131952/'
    },
    {
        id: 'logo-tshirt-regular',
        alt: 'Logo T-Shirt Regular Fit',
        imageUrlGrey: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-tshirt-grey.png?alt=media&token=9e8499d5-82b2-4363-8b9e-12cda1bc33e8',
        imageUrlBlack: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-tshirt-blk.png?alt=media&token=97698df4-6a1a-4c2a-9052-8fa61d1cd0e5',
        imageUrlWhite: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-tshirt-white.png?alt=media&token=487f223f-417d-45a4-99fc-cd24611d4b5a',
        description: 'GTA Digital Logo T-Shirt',
        price: '£15.00',
        shopUrl: 'https://www.dizzyjam.com/products/175475/'
    },
    {
        id: 'type-tshirt-regular',
        alt: 'Type T-Shirt Regular Fit',
        imageUrlWhite: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-tshirt-white.png?alt=media&token=431e52ed-9f80-4c0e-be81-97dfb7df7a37',
        imageUrlGrey: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-tshirt-grey.png?alt=media&token=79e21dd2-45f9-42b3-93cb-999a2a9e291f',
        imageUrlBlack: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-tshirt-blk.png?alt=media&token=636af480-78af-4dff-a0bf-9fa717834c18',
        description: 'GTA Digital Type T-Shirt',
        price: '£15.00',
        shopUrl: 'https://www.dizzyjam.com/products/131951/'
    },
    {
        id: 'logo-tshirt-fitted',
        alt: 'Logo T-Shirt Fitted',
        imageUrlWhite: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-tshirt-fitted-white.png?alt=media&token=f53447c8-87f1-422e-b898-1f74ceb64145',
        imageUrlBlack: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Flogo-tshirt-fitted-black.png?alt=media&token=0e2190a9-b5e5-45d3-9e37-07b1a106f91e',
        description: 'GTA Digital Logo T-Shirt - Fitted',
        price: '£15.00',
        shopUrl: 'https://www.dizzyjam.com/products/175474/'
    },
    {
        id: 'type-tshirt-fitted',
        alt: 'Type T-Shirt Fitted',
        imageUrlWhite: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-tshirt-fitted-white.png?alt=media&token=ec87c90f-0894-4491-9b5d-048ed4102c1b',
        imageUrlBlack: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftype-tshirt-fitted-blk.png?alt=media&token=c1b72963-9d40-4c98-99f4-139be4c63ed9',
        description: 'GTA Digital Type T-Shirt - Fitted',
        price: '£15.00',
        shopUrl: 'https://www.dizzyjam.com/products/131949/'
    },
    {
        id: 'gtadigital-mug',
        alt: 'GTA Digital Mug',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Fmug.png?alt=media&token=5970aff9-9bda-49fe-8700-81bd24f24cac',
        description: 'GTA Digital Mug',
        price: '£9.99',
        shopUrl: 'https://www.dizzyjam.com/products/175846/'
    },
    {
        id: 'gtadigital-tote-bag',
        alt: 'GTA Digital Tote Bag',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fstore-items%2Ftote-bag.png?alt=media&token=27de7275-fd78-4668-8c89-fb8b521d2113',
        description: 'GTA Digital Tote Bag',
        price: '£8.99',
        shopUrl: 'https://www.dizzyjam.com/products/175847/'
    },
]*/

/*const LIVESTREAM = [
    {
        id: '4',
        videoUrl: 'https://www.youtube.com/embed/MwU0oS0LKGs?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1',
        title: 'GTA Digital Live Presents: Gary The Apprentice',
        date: '19 April 2020',
        style: 'Hard Techno',
        tracksBy: ''
    },
    {
        id: '3',
        videoUrl: 'https://www.youtube.com/embed/4PaRduQyIls?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1',
        title: 'GTA Digital Live Presents: Gary The Apprentice',
        date: '5 April 2020',
        style: 'Jackin and Tough Tribal/Hard Techno',
        tracksBy: ''
    },
    {
        id: '2',
        videoUrl: 'https://www.youtube.com/embed/jHSndN1TfVc?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1',
        title: 'GTA Digital Live Presents: Gary The Apprentice',
        date: '24 August 2018',
        style: 'Funky/Tribal Techno',
        tracksBy: ''
    },
    {
        id: '1',
        videoUrl: 'https://www.youtube.com/embed/SyklycdUPsw?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1',
        title: 'GTA Digital Live Presents: Gary The Apprentice',
        date: '29 July 2018',
        style: 'Straight Up/Hypnotic Techno',
        tracksBy: ''
    },
]*/