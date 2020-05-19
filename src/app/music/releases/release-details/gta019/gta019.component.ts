import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component ({
    selector: 'gta19-details',
    templateUrl: 'gta019.component.html',
    styleUrls: ['gta019.component.css']
})

export class GTA19Component {
    
    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [
        {
            title: 'Mv (Original Mix) by Gary The Apprentice',
            link: './assets/audio/samples/unixEP/mv.mp3'
        },
        {
            title: 'Grep (Original Mix) by Gary The Apprentice',
            link: './assets/audio/samples/unixEP/grep.mp3'
        },
        {
            title: 'TraceRoute (Original Mix) by Gary The Apprentice',
            link: './assets/audio/samples/unixEP/traceroute.mp3'
        },
        {
            title: 'TraceRoute (DJ Ze MigL Remix) by Gary The Apprentice',
            link: './assets/audio/samples/unixEP/tracerouteZeMigL.mp3'
        }
    ];

    msaapDisplayTitle = true;
    msaapDisplayPlayList = false;
    msaapPageSizeOptions = 4;
    msaapDisplayVolumeControls = true;

}