import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'gta1-details',
  templateUrl: 'gta001.component.html',
  styleUrls: ['../release-details.component.css']
})
export class GTA1Component {

    // Material Style Advance Audio Player Playlist
    msaapPlaylist: Track[] = [
      {
          title: 'A Lesson Worth Learnin (Original Mix) by Gary The Apprentice',
          link: './assets/audio/samples/rechargedEP/aLessonWorthLearnin.mp3'
      },
      {
          title: 'Wing Nut (Original Mix) by Gary The Apprentice',
          link: './assets/audio/samples/rechargedEP/wingNut.mp3'
      },
      {
          title: 'Recharged (Original Mix) by Gary The Apprentice',
          link: './assets/audio/samples/rechargedEP/recharged.mp3'
      }
  ];

  msaapDisplayTitle = true;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = 4;
  msaapDisplayVolumeControls = true;

}
