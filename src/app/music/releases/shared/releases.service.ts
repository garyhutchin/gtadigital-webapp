import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'

import { Release } from '../../../models/content-interface'
import { Observable, of } from 'rxjs'

@Injectable()
export class ReleaseService {

    constructor(private http: HttpClient) {}

    /*getReleases() {
        return this.http.get<{ [key: string]: Release }>('https://gta-digital-web-app.firebaseio.com/releases.json')
        .pipe(map(responseData => {
            const releasesArray: Release[] = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                    releasesArray.push({ ...responseData[key], id: key })
                }
            }
            return releasesArray;
        })
        );
    }*/

    getReleases():Observable<Release[]> {
        return this.http.get<Release[]>('https://gta-digital-web-app.firebaseio.com/releases.json')
            .pipe(catchError(this.handleError<Release[]>('getReleases', [])))
    }

    getRelease(id:number):Observable<Release> {
        return this.http.get<Release>(`https://gta-digital-web-app.firebaseio.com/releases/${+id}.json`)
        .pipe(catchError(this.handleError<Release>('getReleases')))
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        }
    }
}

/*const RELEASES:Release[] = [

    {
        artistName : "Ungrateful Ambassador",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta020.jpg?alt=media&token=c336a640-1c9b-4632-9223-c859acbee140",
        catNo : "[GTA020]",
        discountCode : "GTA50",
        id : 20,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta020.jpg?alt=media&token=78cd6c1d-ab65-4e28-9b05-aca7290d7494",
        releaseDate : "",
        releaseInfoP1 : "",
        releaseInfoP2 : "",
        releaseInfoP3 : "",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : "",
        shortDescription: "Jacked up techno, with an outstanding remix by DJ Ze Mig L. Supported by the likes of Perc, Patrick DSP, Wetworks & Ike Dusk",
        title : "Purist EP"  
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta019.jpg?alt=media&token=2f361b13-7e52-44f3-be1e-41ed73e041fa",
        catNo : "[GTA019]",
        id : 19,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta019.jpg?alt=media&token=a5771348-e5c5-4ea6-8b13-43ec273cf6ac",
        releaseDate : "13 May 2019",
        releaseInfoP1 : "Supported by: Perc, Patrick DSP, Wetworks, Dr Motte, Ian Void, Ike Dusk, Millhouse, Raymundo Rodriguez [Jaded / London Techno], Julez Wyl [Jaded], Clarkee [Area 51], DJ Ze Mig L, Danny Slade [Zone Magazine / Herald Radio], Daz Furey, Drop-E, Gemma Furbank, Hidden Reflection, John Rowe [Hypnohouse Trax], Julian Rutherford [Technoscene], Kereni [Forte], Luca Agnelli, Luigi Madonna, Mark Neenan, Matteo (Different Grooves), Newks, Zuni [Tribal Waves] & John Warwick [Primate Recordings]",
        releaseInfoP2 : "Tracks 1, 2 & 3 written by Gary The Apprentice",
        releaseInfoP3 : "Track 4 written by Gary The Apprentice and DJ Ze MigL",
        releaseInfoP4 : "Mastered by Jon Doe CLSM Mastering",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=2747614855/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta019-unix-ep",
        shortDescription: "Jacked up techno, with an outstanding remix by DJ Ze Mig L. Supported by the likes of Perc Patrick DSP, Wetworks & Ike Dusk",
        title : "Unix EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta018.jpg?alt=media&token=729e3706-b9b0-4749-9f63-a3be8a00d899",
        catNo : "[GTA018]",
        id : 18,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta018.jpg?alt=media&token=1d0104e2-e0b3-4291-bcef-9502e6c453e1",
        releaseDate : "31 August 2018",
        releaseInfoP1 : "Supported by: Dax J (Monnom Black), Spartaque, Patrick DSP, Ian Void, DJ Ze Mig L, Dr Motte, Luigi Madonna, Tony Verdi, Gemma Furbank, A Morgan (Rhythm Theory), Clarkee (Area 51), DJ K.N (Mass United), DJ Warp (Japan) / Takashi Watanabe, Danny Slade (Zone Magazine/Herald Radio), Hidden Reflection, Jon E Thin Bremmar, Josh Moseley (Chicago Jaxxx), Kereni (Forte), Kerstin Eden (Electric Eden), Louk/Hidden Identity, Mark Greene, Matteo (Different Grooves), Vincent De Wit, Wayne DJC (Beyond Control), Zuni (Tribal Waves)",
        releaseInfoP2 : "Tracks 1, 4 & 5 Written by Gary Hutchin",
        releaseInfoP3 : "Tracks 2 & 3 Written by Gary Hutchin & Vincent de Wit",
        releaseInfoP4 : "Track 6 Written by Gary Hutchin & Nicola Scarano",
        releaseInfoP5 : "Mastered by Steve Loss - Black Monolith Studio",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=2762695312/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta018-what-have-we-become",
        title : "What Have We Become"
    },
    {
        artistName : "Twistedbrain74",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta017.jpg?alt=media&token=f06c9b37-234a-466f-8946-dbde7b5e8eea",
        catNo : "[GTA017]",
        id : 17,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta017.jpg?alt=media&token=4b56cde4-4460-4e5e-b900-6e965293a4c2",
        releaseDate : "21 April 2017",
        releaseInfoP1 : "Produced by Twistedbrain74.",
        releaseInfoP2 : "Mastered by Gary The Apprentice.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=2098967616/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta017-longitudinal-axis-ep",
        title : "Longitudinal Axis EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta016.jpg?alt=media&token=266f49e6-f54b-48d0-b697-1e7dd70db237",
        catNo : "[GTA016]",
        id : 16,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta016.jpg?alt=media&token=98c62fc7-a32e-422c-9fe2-c2ec51b789b1",
        releaseDate : "13 January 2017",
        releaseInfoP1 : "The first free release of 2017.",
        releaseInfoP2 : "Produced and mastered by Gary The Apprentice.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=596705501/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta016-of-little-significance",
        title : "Of Little Significance"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta015.jpg?alt=media&token=a099943e-7180-4fe1-b042-176ceea3d3e6",
        catNo : "[GTA015]",
        id : 15,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta015.jpg?alt=media&token=6af03727-469d-4c52-91a2-512a88e35866",
        releaseDate : "25 March 2016",
        releaseInfoP1 : "For our first release of 2016, Gary The Apprentice is back with another 3 track EP.",
        releaseInfoP2 : "For this release Gary has taken things in a slightly different direction, with slower BPM's, and more focus on percussive textures and low end grooves. Expect to hear rolling, hypnotic percussion, banging kick drums, grooving baselines and oldskool flavour synths.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=1191201557/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta015-a-new-dimension",
        title : "A New Dimension"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta014.jpg?alt=media&token=213c106b-7dce-4b04-a4cc-18877f0976e3",
        catNo : "[GTA014]",
        id : 14,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta014.jpg?alt=media&token=2be3d44f-577d-4ede-ae59-6689a345d751",
        releaseDate : "28 May 2015",
        releaseInfoP1 : "So now onto our 14th release. After spending the last year in Holland, and not having a nice comfy setup to work in, not a lot went on music wise, but now Gary The Apprentice is back home in Edinburgh with a new home studio, and has put together some no messing around techno.",
        releaseInfoP2 : "Expect to hear 3 straight up, straight forward, driving techno tracks, very much influenced by the older Techno sound, with the forth track Bon going in a completely different direction - a much more laid back/chilled out vibe, something for those Sunday chill out sessions.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=2308701589/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta014-back-in-the-burgh-ep",
        title : "Back In The Burgh EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta013.jpg?alt=media&token=92f75d18-fdfa-4402-bf76-6b6964efedd4",
        catNo : "[GTA013]",
        id : 13,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta013.jpg?alt=media&token=253acf2e-753f-4b89-b6ca-16144fb33fb0",
        releaseDate : "16 November 2014",
        releaseInfoP1 : "For our 13th release, Gary The Apprentice is back with another 4 track EP.",
        releaseInfoP2 : "Expect to hear banging kicks, twisted, hypnotic synths & rolling percussion. The 4th track is something a bit different, this shows the more experimental side of what Gary creates.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=1431840101/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta013-mindfulness-ep",
        title : "Mindfulness EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta012.jpg?alt=media&token=3fcfe213-53fe-4acf-ad0f-4bcd8e3e83bc",
        catNo : "[GTA012]",
        id : 12,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta012.jpg?alt=media&token=fc0ee6ed-b648-40af-acb1-d864198682aa",
        releaseDate : "18 June 2014",
        releaseInfoP1 : "Now onto our 12th EP, Gary The Apprentice is back with another 4 straight up Techno tracks",
        releaseInfoP2 : "Expect 3 straight forward, hard hittings bangers, with track 4 having a more groovy, tribal feel to it, with nice rolling drums, synth stabs and a deep grooving bassline.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=4152153140/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta012-roffa-ep",
        title : "Roffa EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta011.jpg?alt=media&token=189bf4f9-eec0-49e9-b9e2-f796aa0e1b3d",
        catNo : "[GTA011]",
        id : 11,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta011.jpg?alt=media&token=8ee65774-d00e-42e3-b02c-b7c03a0d3c83",
        releaseDate : "15 January 2014",
        releaseInfoP1 : "Now onto our 11th release, and the first for 2014. Label boss Gary The Apprentice, has put together 3 hard, banging techno tracks.",
        releaseInfoP2 : "If you like your techno with a bit of jack & wonk, with hard hitting kicks and percussion, you will like this. Check it out and grab a copy.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=206006158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta011-abstrakt-riddims-ep",
        title : "Abstrakt Riddims EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta010.jpg?alt=media&token=007600d6-c002-4a92-b25f-9d7a7f149238",
        catNo : "[GTA010]",
        id : 10,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta010.jpg?alt=media&token=fecab556-3e95-49e7-b652-bc626a3f1aeb",
        releaseDate : "19 November 2013",
        releaseInfoP1 : "For the 10th release, label boss Gary The Apprentice has put together 4 banging techno tracks.",
        releaseInfoP2 : "Through-out the EP you can expect to hear oldskool style synths, weird/wonky noises, rolling percussion, solid kicks and phat basslines!",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=1969661319/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta010-the-next-chapter-ep",
        title : "The Next Chapter EP"
    },
    {
        artistName : "Krowne",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta009.jpg?alt=media&token=3ee57c6d-b35c-4af8-95e3-edb2a52a3d77",
        catNo : "[GTA009]",
        id : 9,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta009.jpg?alt=media&token=ed515955-e856-4169-9c87-555e3c72225d",
        releaseDate : "19 October 2013",
        releaseInfoP1 : "For our 9th release, we welcome Krowne to the team.",
        releaseInfoP2 : "For this EP, Krowne has put together 2 very nice techno tracks, with label boss Gary The Apprentice on remix duties.",
        releaseInfoP3 : "Expect deep grooving basslines, tribal percussion and twisted/hypnotic synths, with Gary The Apprentice taking the original tracks in his own direction and creating 2 solid remixes, with an oldskool twist.",
        releaseInfoP4 : "There will be more coming from these two in the future, with some collab projects lined up, so be sure to keep a look out for other releases.",
        releaseInfoP5 : "Pay what you want for this EP, or download it for free.",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=64643918/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta009-open-box-ep",
        title : "Open Box EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta008.jpg?alt=media&token=278efcae-be6d-4900-bf8c-13da3ef2254c",
        catNo : "[GTA008]",
        id : 8,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta008.jpg?alt=media&token=1ceeaaeb-f14f-4166-bf17-366fff2ff155",
        releaseDate : "21 September 2013",
        releaseInfoP1 : "More of the usual straight up, pounding techno from Gary The Apprentice, with Time To Wake Up & Wide Awake adding slightly more of an industrial edge than usual. Another one for the hard heads!",
        releaseInfoP2 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP3 : "",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=2041778642/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta008-mornaaan-ep",
        title : "Mornaaan! EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta007.jpg?alt=media&token=11ef7fb8-83ec-424b-bf88-0197573ca604",
        catNo : "[GTA007]",
        id : 7,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta007.jpg?alt=media&token=b3934252-2b94-48fa-ab4f-5a0cd1aea240",
        releaseDate : "14 September 2013",
        releaseInfoP1 : "For this EP. The Apprentice has put together 3 hard bangin' techno tracks.",
        releaseInfoP2 : "If you like big kicks, driving percussion & wonky/twisted synths, you should check this out!",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=369268153/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta007-mind-warp-ep",
        title : "Mind Warp EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta006.jpg?alt=media&token=bfe76d8f-6529-4b49-8416-44bafc74967f",
        catNo : "[GTA006]",
        id : 6,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta006.jpg?alt=media&token=68a77fa5-ea23-48ac-9454-2759eeba720b",
        releaseDate : "26 July 2013",
        releaseInfoP1 : "Another bangin' EP by Gary The Apprentice.",
        releaseInfoP2 : "Expect 3 straight up, hard, bangin' techno tracks! If you like hard kicks, hypnotic synths & rolling percussion, you will like this EP!",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=860283510/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta006-organised-kaos-ep",
        title : "Organised Kaos EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta005.jpg?alt=media&token=e5d5ccc2-411b-494b-abd4-2f59dc90576e",
        catNo : "[GTA005]",
        id : 5,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta005.jpg?alt=media&token=a86d1a8a-dfe2-4916-9e7e-642bfa3393da",
        releaseDate : "24 June 2013",
        releaseInfoP1 : "Another 3 bangin' techno tracks, by Gary The Apprentice.",
        releaseInfoP2 : "Expect some bangin' kicks, noisy synths & driving percussion! ",
        releaseInfoP3 : "This is one for the hard heads!",
        releaseInfoP4 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=3600579290/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta005-mechanical-lifeforms-ep",
        title : "Mechanical Lifeforms EP"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta004.jpg?alt=media&token=85f3e75a-0501-498b-858e-cba9856c64c9",
        catNo : "[GTA004]",
        id : 4,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta004.jpg?alt=media&token=70d6cc89-2583-4c9e-b0af-a890225c84b4",
        releaseDate : "28 May 2013",
        releaseInfoP1 : "Another solid 3 track EP, by Gary The Apprentice. ",
        releaseInfoP2 : "Expect some straight forward, jacked up, bangin' techno!",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=1142553020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta004-the-dunny-collection",
        title : "The Dunny Collection"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta003.jpg?alt=media&token=75287e21-e729-4781-93fb-bf171e64bfe2",
        catNo : "[GTA003]",
        id : 3,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta003.jpg?alt=media&token=ccf58673-ef83-41d4-a96f-fd773a89ba5d",
        releaseDate : "18 April 2013",
        releaseInfoP1 : "Another 3 track EP from Gary The Apprentice. Expect some raw, dark, jacked up bangin' techno.",
        releaseInfoP2 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP3 : "",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=44053965/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta003-timespace-ep",
        title : "Timespace EP"
    },
    {
        artistName : "Jamie Ball",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta002.jpg?alt=media&token=1dabc320-6510-4483-8141-9a122eb559ca",
        catNo : "[GTA002]",
        id : 2,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta002.jpg?alt=media&token=beef0183-f6de-4e03-ad79-5c4a757379ea",
        releaseDate : "8 April 2013",
        releaseInfoP1 : "Jamie has put 3 quality tracks together for this EP, if you like acid techno, you will definitely like what Jamie has came up with!",
        releaseInfoP2 : "This is currently the most popular release on GTA Digital, definitely one to check out.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=3386793062/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta002-the-brass-continent-ep",
        title : "The Brass Continent"
    },
    {
        artistName : "Gary The Apprentice",
        artwork : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcover-images%2Freleases%2Fgta001.jpg?alt=media&token=6a8cb802-9d05-4147-8cbb-332bc5798057",
        catNo : "[GTA001]",
        id : 1,
        imageUrl : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Fcard-images%2Frelease-artwork%2Fgta001.jpg?alt=media&token=e8bc63c3-72cb-4da2-b3c3-eb72fdd5aed7",
        releaseDate : "26 March 2013",
        releaseInfoP1 : "This is what kicked off my venture into starting my own label. With being sick of too many label at the time churning out the same, boring generic techno, I decided to stop sending demos to labels and release my music on my own.",
        releaseInfoP2 : "Expect 3 straight up banging techno tracks. Since releasing this EP the quality of my music has increased massively, but I'm still proud of these early tracks.",
        releaseInfoP3 : "Pay what you want for this EP, or download it for free.",
        releaseInfoP4 : "",
        releaseInfoP5 : "",
        releasePlayer : 'https://bandcamp.com/EmbeddedPlayer/album=4083688477/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/artwork=none/transparent=true/seamless',
        releaseUrl : "https://gtadigital.bandcamp.com/album/gta001-recharged-ep",
        title : "Recharged EP"
    }
]*/