export interface Content {
    id?: string;
    heroText?: string;
    heroImage?: string;
    heroHeader?: string;
    heroButton?: string;
    header1?: string;
    header2?: string;
    header3?: string;
    gtaDigitalLiveText?: string;
    gtaDigitalLiveHeader?: string;
    button1?: string;
    button2?: string;
    aboutText?: string;
    aboutImage?: string;
}

export interface LatestNews {
    title?: string;
    info?: string;
    moreInfo?: string;
    imageUrl?: string;   
    internalUrl?: string;
    internalUrlTitle?: string; 
    externalUrl?: string;
    externalUrlTitle?: string; 
}

export interface Release {
    id?: number;
    title?: string;
    artistName?: string;
    catNo?: string;
    imageUrl?: string;
    artwork?: string;
    releaseUrl?: string;        
    releaseInfoP1?: string;
    releaseInfoP2?: string;
    releaseInfoP3?: string;
    releaseInfoP4?: string;
    releaseInfoP5?: string;
    releaseDate?: string;
    releasePlayer?: string
}