import { Injectable } from '@angular/core';

@Injectable()

export class ContentService {

    getMusicContent(id:string) {
        return MAINCONTENT.find(music => music.id === id)
    }
}

const MAINCONTENT = [

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