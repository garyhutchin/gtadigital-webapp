import { Injectable } from '@angular/core'

@Injectable()
export class PodcastService {
    getPodcasts() {
        return PODCASTS
    }

    getPodcast(id:string) {
        return PODCASTS.find(podcast => podcast.id === id)
    }
}

const PODCASTS = [
    {
        id: 'podcast-30',
        title: 'GTA Digital Podcast #30',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast30.jpg',
        artwork: './assets/images/artwork/podcasts/podcast30.jpg',
        style: 'Hard Techno',
        duration: '1hr',
        track1: '23 Terawatts (Original Mix) - The Divide',
        track2: 'Malfunction (Original Mix) - Mattias Fridell',
        track3: 'Music (Original Mix) - Lars Klein',
        track4: 'Tengu (Original Mix) - Concrete Djz',
        track5: 'Sidetude (Original Mix) - Primus Tech',
        track6: 'Inform (Original Mix) - Andre Walter & Chris Hope',
        track7: 'Sixfold Symmetry (Original Mix) - The Anxious',
        track8: 'Darko Barko (Bas Mooy & Vincent de Wit Remix) - Olivier Giacomotto',
        track9: 'Reconstruction (Original Mix) - Concrete Djz',
        track10: 'Smoke This (Original Mix) - DJ Mika',
        track11: 'Renascent (Original Mix) - A. Johansson & M. Fridell',
        track12: 'Illegal Intentions (Original Mix) - Primal',
        track13: 'Ogre Hands (Original Mix) - David Moleon',
        track14: 'Grande Fiesta (Original Mix) - DJ Mika',
        track15: 'Subrepress (Original Mix) - Vincent de Wit',
        track16: 'Garaza (Original Mix) - DJ Ogi',
        track17: 'Full Charge (Original Mix) - Vincent de Wit',
        track18: 'Prodrive (Ben Long Remix) - Mike Humphries',
        track19: 'Polar Magnetism (Original Mix) - Concrete Djz',
        track20: 'Atomska (Original Mix) - DJ Ogi & Concrete Djz',
        track21: 'Proc (Original Mix) - DJ Ogi',
        track22: 'Darkness In Yer Eyes (Original Mix) - Weichentechnikk & Marcel Cousteau',
        track23: 'Smoke This (Original Mix) - DJ Mika',
        track24: 'Renascent (Original Mix) - A. Johansson & M. Fridell',
        track25: 'Illegal Intentions (Original Mix) - Primal',
        track26: 'Ogre Hands (Original Mix) - David Moleon',
        track27: 'Grande Fiesta (Original Mix) - DJ Mika',
        track28: 'Subrepress (Original Mix) - Vincent de Wit',
        track29: 'Garaza (Original Mix) - DJ Ogi',
        track30: 'Full Charge (Original Mix) - Vincent de Wit',
        track31: 'Prodrive (Ben Long Remix) - Mike Humphries',
        track32: 'Polar Magnetism (Original Mix) - Concrete Djz',
        track33: 'Atomska (Original Mix) - DJ Ogi & Concrete Djz',
        track34: 'Proc (Original Mix) - DJ Ogi',
        track35: 'Darkness In Yer Eyes (Original Mix) - Weichentechnikk & Marcel Cousteau'
    },
    {
        id: 'podcast-29',
        title: 'GTA Digital Podcast #29',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast29.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast29.jpg',
        style: 'Hard Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-28',
        title: 'GTA Digital Podcast #28',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast28.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast28.jpg',
        style: 'Hard Groove/Tough Tribal Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-27',
        title: 'GTA Digital Podcast #27',
        artistName: 'Kyle Horne',
        thumbnailUrl: './assets/images/card-images/podcast/podcast27.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast27.jpg',
        style: 'Techno/Hard Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-26',
        title: 'GTA Digital Podcast #26',
        artistName: 'Bushby',
        thumbnailUrl: './assets/images/card-images/podcast/podcast26.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast26.jpg',
        style: 'Straight Up/Hypnotic Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-25',
        title: 'GTA Digital Podcast #25',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast25.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast25.jpg',
        style: 'Hard Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-24',
        title: 'GTA Digital Podcast #24',
        artistName: 'Mallory',
        thumbnailUrl: './assets/images/card-images/podcast/podcast24.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast24.jpg',
        style: 'Tough/Chunky/Hypnotic Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-23',
        title: 'GTA Digital Podcast #23',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast23.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast23.jpg',
        style: 'Deep/Hypnotic Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-22',
        title: 'GTA Digital Podcast #22',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast22.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast22.jpg',
        style: 'Hard Techno/Schranz/Industrial',
        duration: '1hr'
    },
    {
        id: 'podcast-21',
        title: 'GTA Digital Podcast #21',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast21.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast21.jpg',
        style: 'Wonky/Jackin Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-20',
        title: 'GTA Digital Podcast #20',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast20.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast20.jpg',
        style: 'Techno - Live PA',
        duration: '1hr'
    },
    {
        id: 'podcast-19',
        title: 'GTA Digital Podcast #19',
        artistName: 'Lee Malice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast19.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast19.jpg',
        style: 'Jacked Up Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-18',
        title: 'GTA Digital Podcast #18',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast18.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast18.jpg',
        style: 'Techno/Hard Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-17',
        title: 'GTA Digital Podcast #17',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast17.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast17.jpg',
        style: 'Techno/Hard Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-16',
        title: 'GTA Digital Podcast #16',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast16.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast16.jpg',
        style: 'Hypnotic Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-15',
        title: 'GTA Digital Podcast #15',
        artistName: 'Horror Brawl',
        thumbnailUrl: './assets/images/card-images/podcast/podcast15.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast15.jpg',
        style: 'Techno',
        duration: '2hr'
    },
    {
        id: 'podcast-14',
        title: 'GTA Digital Podcast #14',
        artistName: 'Owen Ni',
        thumbnailUrl: './assets/images/card-images/podcast/podcast14.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast14.jpg',
        style: 'Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-13',
        title: 'GTA Digital Podcast #13',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast13.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast13.jpg',
        style: 'Hypnotic Techno',
        duration: '1hr 16m'
    },
    {
        id: 'podcast-12',
        title: 'GTA Digital Podcast #12',
        artistName: 'Deep Audio',
        thumbnailUrl: './assets/images/card-images/podcast/podcast12.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast12.jpg',
        style: 'Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-11',
        title: 'GTA Digital Podcast #11',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast11.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast11.jpg',
        style: 'Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-10',
        title: 'GTA Digital Podcast #10',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast10.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast10.jpg',
        style: 'Straight Up Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-9',
        title: 'GTA Digital Podcast #9',
        artistName: 'LBM12',
        thumbnailUrl: './assets/images/card-images/podcast/podcast9.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast9.jpg',
        style: 'Hypnotic Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-8',
        title: 'GTA Digital Podcast #8',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast8.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast8.jpg',
        style: 'Jackin Techno - Vinyl Set',
        duration: '1hr'
    },
    {
        id: 'podcast-7',
        title: 'GTA Digital Podcast #7',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast7.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast7.jpg',
        style: 'Techno',
        duration: '2hr'
    },
    {
        id: 'podcast-6',
        title: 'GTA Digital Podcast #6',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast6.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast6.jpg',
        style: 'Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-5',
        title: 'GTA Digital Podcast #5',
        artistName: 'Nizzy',
        thumbnailUrl: './assets/images/card-images/podcast/podcast5.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast5.jpg',
        style: 'Dark Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-4',
        title: 'GTA Digital Podcast #4',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast4.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast4.jpg',
        style: 'Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-3',
        title: 'GTA Digital Podcast #3',
        artistName: 'Krowne',
        thumbnailUrl: './assets/images/card-images/podcast/podcast3.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast3.jpg',
        style: 'Deep Techno',
        duration: '1hr'
    },
    {
        id: 'podcast-2',
        title: 'GTA Digital Podcast #2',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast2.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast2.jpg',
        style: 'Techno - Own Productions Set',
        duration: '1hr'
    },
    {
        id: 'podcast-1',
        title: 'GTA Digital Podcast #1',
        artistName: 'Gary The Apprentice',
        thumbnailUrl: './assets/images/card-images/podcast/podcast1.jpg',
        imageUrl: './assets/images/artwork/podcasts/podcast1.jpg',
        style: 'Hard Groove/Jackin Techno',
        duration: '1hr'
    }
]