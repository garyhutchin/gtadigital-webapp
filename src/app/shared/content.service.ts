import { Injectable } from '@angular/core';

@Injectable()

export class ContentService {

    getNavItems() {
        return NAVITEMS
    }

    getHomeContent(id:string) {
        return MAINCONTENT.find(home => home.id === id)
    }

    getAboutContent(id:string) {
        return MAINCONTENT.find(about => about.id === id)
    }

    getMusicContent(id:string) {
        return MAINCONTENT.find(music => music.id === id)
    }

    getSocialMediaLinks() {
        return SOCIALMEDIALINKS
    }
}

const NAVITEMS = [

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
        title: 'Store',
        route: 'store'
    },
    {
        title: 'Contact',
        route: 'contact'
    }

]

const MAINCONTENT = [
    {
        id: 'home',
        gtaDigitalLiveHeader : "GTA Digital Live Presents",
        gtaDigitalLiveSrc : "https://www.youtube.com/embed/6xTieGgxjDQ?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1",
        gtaDigitalLiveText : "Tune into the GTA Digital Live stream to check out Gary The Apprentice playing all things techno, in full HD and crystal clear audio.</p><p>Head over to the live stream archive to check out recordings of all past streams.</p><p>Click the subscribe button below to stay notified.",
        header1 : "Latest News",
        header2 : "GTA Digital Live",
        heroButton : "Listen Now",
        heroHeader : "Underground Techno",
        heroImage : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Flogo.png?alt=media&token=899bcdcb-0a2f-4927-8930-bb8e6b509ee1",
        heroText : "GTA Digital started in 2013 as a platform for Gary The Apprentice to release his own music. Since then the label has grown, with the addition of a podcast series and more recently a monthly show on Fnoob Techno Radio"
    },
    {
        id: "about",
        aboutImage : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2FaboutMe-header.jpg?alt=media&token=056609e0-72eb-4727-91a3-9e5150455c9b",
        aboutText : "GTA Digital is a net label and Podcast series, set up by Gary The Apprentice, to provide the world with proper, underground Techno, staying clear of the more popular sound that is being churned out by bigger labels.</p><p>Here at GTA Digital, we are wanting to keep things real, releasing proper Techno, by proper Techno heads. We are always on the look out for new artists to get involved, so if you like what we are doing, and feel your music fits, please get in touch with a demo for us to consider releasing on the label.</p><p>This page will be used as our main platform for all of the Podcasts on the GTA Digital Podcast Series, if you would like to get involved, and provide a mix for the Podcast, please do get in touch.</p><p>To check out our full back catalogue of releases, to get information on the artists involved, and to check out the merchandise we have on sale.",
        heroHeader : "GTA Digital",
        heroImage : "https://firebasestorage.googleapis.com/v0/b/gta-digital-web-app.appspot.com/o/main-content%2Flogo.png?alt=media&token=899bcdcb-0a2f-4927-8930-bb8e6b509ee1",
        heroText : "Label, podcast series & radio show.<br>Releasing underground techno since 2013..."
    },
    {
        id: 'music',
        button1 : "View All Releases",
        button2 : "View All Podcasts",
        header1 : "Releases",
        header2 : "Podcasts",
        header3 : "GTA Digital Live Archive",
        heroButton : "Check out the latest release",
        heroHeader : "Music",
        heroText : "Check out all of the music on GTA Digital, releases, podcasts and also recordings from past live streams..."
    },
    {
        id: "under-construction",
        text: "This app is still in development - some content has been added as a placeholder"
    }
]

const SOCIALMEDIALINKS = [
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
]