import { Injectable } from '@angular/core'

@Injectable()
export class ReleaseService {
    getReleases() {
        return RELEASES
    }
}

const RELEASES = [
    {
        id: 'gta20',
        title: 'Purist EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA020]',
        imageUrl: './assets/images/card-images/release-artwork/gta020.jpg'
    },
    {
        id: 'gta19',
        title: 'Unix EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA019]',
        imageUrl: './assets/images/card-images/release-artwork/gta019.jpg'
    },
    {
        id: 'gta18',
        title: 'What Have We Become',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA018]',
        imageUrl: './assets/images/card-images/release-artwork/gta018.jpg'
    },
    {
        id: 'gta17',
        title: 'Longitudinal Axis EP',
        artistName: 'Twistedbrain74',
        catNo: '[GTA017]',
        imageUrl: './assets/images/card-images/release-artwork/gta017.jpg'
    },
    {
        id: 'gta16',
        title: 'Of Little Significance',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA016]',
        imageUrl: './assets/images/card-images/release-artwork/gta016.jpg'
    },
    {
        id: 'gta15',
        title: 'A New Dimension',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA015]',
        imageUrl: './assets/images/card-images/release-artwork/gta015.jpg'
    },
    {
        id: 'gta14',
        title: 'Back In The Burgh EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA014]',
        imageUrl: './assets/images/card-images/release-artwork/gta014.jpg'
    },
    {
        id: 'gta13',
        title: 'Mindfulness EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA013]',
        imageUrl: './assets/images/card-images/release-artwork/gta013.jpg'
    },
    {
        id: 'gta12',
        title: 'Roffa EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA012]',
        imageUrl: './assets/images/card-images/release-artwork/gta012.jpg'
    },
    {
        id: 'gta11',
        title: 'Abstrakt Riddims EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA011]',
        imageUrl: './assets/images/card-images/release-artwork/gta011.jpg'
    },
    {
        id: 'gta10',
        title: 'The Next Chapter EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA010]',
        imageUrl: './assets/images/card-images/release-artwork/gta010.jpg'
    },
    {
        id: 'gta09',
        title: 'Open Box EP',
        artistName: 'Krowne',
        catNo: '[GTA009]',
        imageUrl: './assets/images/card-images/release-artwork/gta009.jpg'
    },
    {
        id: 'gta08',
        title: 'Mornaaan! EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA008]',
        imageUrl: './assets/images/card-images/release-artwork/gta008.jpg'
    },
    {
        id: 'gta07',
        title: 'Mind Warp EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA007]',
        imageUrl: './assets/images/card-images/release-artwork/gta007.jpg'
    },
    {
        id: 'gta06',
        title: 'Organised Kaos EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA006]',
        imageUrl: './assets/images/card-images/release-artwork/gta006.jpg'
    },
    {
        id: 'gta05',
        title: 'Mechanical Lifeforms EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA005]',
        imageUrl: './assets/images/card-images/release-artwork/gta005.jpg'
    },
    {
        id: 'gta04',
        title: 'The Dunny Collection',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA004]',
        imageUrl: './assets/images/card-images/release-artwork/gta004.jpg'
    },
    {
        id: 'gta03',
        title: 'Timespace EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA003]',
        imageUrl: './assets/images/card-images/release-artwork/gta003.jpg'
    },
    {
        id: 'gta02',
        title: 'The Brass Continent',
        artistName: 'Jamie Ball',
        catNo: '[GTA002]',
        imageUrl: './assets/images/card-images/release-artwork/gta002.jpg'
    },
    {
        id: 'gta01',
        title: 'Recharged EP',
        artistName: 'Gary The Apprentice',
        catNo: '[GTA001]',
        imageUrl: './assets/images/card-images/release-artwork/gta001.jpg'
    },
]