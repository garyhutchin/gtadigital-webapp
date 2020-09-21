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
        heroHeader: 'Underground Techno',
        heroImage: '../../assets/images/logo.png',
        heroText: 'GTA Digital started in 2013 as a platform for Gary The Apprentice to release his own music. Since then the label has grown, with the addition of a podcast series and more recently a monthly show on Fnoob Techno Radio',
        heroButton: 'Listen Now',
        header1: 'Latest News',
        header2: 'GTA Digital Live',
        gtaDigitalLiveHeader: 'GTA Digital Live Presents',
        gtaDigitalLiveText: 'Tune into the GTA Digital Live stream to check out Gary The Apprentice playing all things techno, in full HD and crystal clear audio.</p><p>Head over to the live stream archive to check out recordings of all past streams.</p><p>Click the subscribe button below to stay notified.',
        gtaDigitalLiveSrc: 'https://www.youtube.com/embed/6xTieGgxjDQ?modestbranding=1;controls=1;showinfo=0;rel=0;fs=1'
    },
    {
        id: 'about',
        heroHeader: 'GTA Digital',
        heroImage: '../../assets/images/logo.png',
        heroText: 'Label, podcast series & radio show.<br>Releasing underground techno since 2013...',
        aboutText: 'GTA Digital is a net label and Podcast series, set up by Gary The Apprentice, to provide the world with proper, underground Techno, staying clear of the more popular sound that is being churned out by bigger labels.</p><p>Here at GTA Digital, we are wanting to keep things real, releasing proper Techno, by proper Techno heads. We are always on the look out for new artists to get involved, so if you like what we are doing, and feel your music fits, please get in touch with a demo for us to consider releasing on the label.</p><p>This page will be used as our main platform for all of the Podcasts on the GTA Digital Podcast Series, if you would like to get involved, and provide a mix for the Podcast, please do get in touch.</p><p>To check out our full back catalogue of releases, to get information on the artists involved, and to check out the merchandise we have on sale.',
        aboutImage: '../../assets/images/medium-images/aboutMe-header.jpg'
    },
    {
        id: 'music',
        heroHeader: 'Music',
        heroText: 'Check out all of the music on GTA Digital, releases, podcasts and also recordings from past live streams...',
        heroButton: 'Check out the latest release',
        header1: 'Releases',
        header2: 'Podcasts',
        header3: 'GTA Digital Live Archive',
        button1: 'View All Releases',
        button2: 'View All Podcasts'
    }
]