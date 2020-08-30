import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../../shared/releases.service';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'gta12-details',
  templateUrl: './gta012.component.html',
  styleUrls: ['../release-details.component.css']
})
export class GTA12Component implements OnInit {

  release:any

  constructor(private releaseService:ReleaseService) {
  }

  ngOnInit() {
      this.release = this.releaseService.getRelease('gta12')
  }
  
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
