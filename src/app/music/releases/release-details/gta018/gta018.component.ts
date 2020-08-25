import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'gta18-details',
  templateUrl: 'gta018.component.html',
  styleUrls: ['gta018.component.css']
})
export class GTA18Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

      // Material Style Advance Audio Player Playlist
      msaapPlaylist: Track[] = [
        {
            title: 'What Have We Become (Original Mix) by Gary The Apprentice',
            link: './assets/audio/samples/whatHaveWeBecomeEP/whatHaveWeBecome.mp3'
        },
        {
            title: 'What Have We Become (Vincent De Wit Hard Mix) by Gary The Apprentice',
            link: './assets/audio/samples/whatHaveWeBecomeEP/whatHaveWeBecome_vincentHardMix.mp3'
        },
        {
            title: 'What Have We Become (Vincent De Wit Dub Mix) by Gary The Apprentice',
            link: './assets/audio/samples/whatHaveWeBecomeEP/whatHaveWeBecome_vincentDubMix.mp3'
        },
        {
            title: 'The End of Time As We Know It (Original Mix) by Gary The Apprentice',
            link: './assets/audio/samples/whatHaveWeBecomeEP/theEndOfTimeAsWeKnowIt.mp3'
        },
        {
            title: 'The Outcome (Original Mix) by Gary The Apprentice',
            link: './assets/audio/samples/whatHaveWeBecomeEP/theOutcome.mp3'
        },
        {
            title: 'The Outcome (Car-D Remix) by Gary The Apprentice',
            link: './assets/audio/samples/whatHaveWeBecomeEP/theOutcome_carDremix.mp3'
        }

    ];

    msaapDisplayTitle = true;
    msaapDisplayPlayList = false;
    msaapPageSizeOptions = 4;
    msaapDisplayVolumeControls = true;

}
