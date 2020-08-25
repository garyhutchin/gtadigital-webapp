import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { appRoutes } from './routes';
import { DesktopNavComponent } from './nav/desktop-nav/desktop-nav.component';
import { TabNavComponent } from './nav/tab-nav/tab-nav.component';
import { MostPopularComponent } from './main/most-popular/most-popular.component';
import { MusicMainComponent } from './music/mainComponent/music-main.component';
import { ReleaseListTileComponent } from './music/mainComponent/release-list-tile/release-list-tile.component';
import { ReleaseListComponent } from './music/releases/release-list/release-list.component';
import { ReleaseContainerComponent } from './music/releases/release-container.component';
import { LatestNewsComponent } from './main/latest-news/latest-news.component';
import { GTA19Component } from './music/releases/release-details/gta019/gta019.component';
import { GTA18Component } from './music/releases/release-details/gta018/gta018.component';
import { GTA17Component } from './music/releases/release-details/gta017/gta017.component';
import { YouMayLikeComponent } from './music/you-may-like/you-may-like.component';
import { LiveStreamComponent } from './main/live-stream/live-stream.component';
import { PodcastTileComponent } from './music/mainComponent/podcast-tile/podcast-tile.component';
import { LiveStreamArchiveComponent } from './music/mainComponent/live-stream-archive/live-stream-archive.component';
import { Gta016Component } from './music/releases/release-details/gta016/gta016.component';
import { Gta015Component } from './music/releases/release-details/gta015/gta015.component';
import { Gta014Component } from './music/releases/release-details/gta014/gta014.component';
import { Gta013Component } from './music/releases/release-details/gta013/gta013.component';
import { Gta012Component } from './music/releases/release-details/gta012/gta012.component';
import { Gta011Component } from './music/releases/release-details/gta011/gta011.component';
import { Gta010Component } from './music/releases/release-details/gta010/gta010.component';
import { Gta009Component } from './music/releases/release-details/gta009/gta009.component';
import { Gta008Component } from './music/releases/release-details/gta008/gta008.component';
import { Gta007Component } from './music/releases/release-details/gta007/gta007.component';
import { Gta006Component } from './music/releases/release-details/gta006/gta006.component';
import { Gta005Component } from './music/releases/release-details/gta005/gta005.component';
import { Gta004Component } from './music/releases/release-details/gta004/gta004.component';
import { Gta003Component } from './music/releases/release-details/gta003/gta003.component';
import { Gta002Component } from './music/releases/release-details/gta002/gta002.component';
import { Gta001Component } from './music/releases/release-details/gta001/gta001.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopNavComponent,
    TabNavComponent,
    MostPopularComponent,
    MusicMainComponent,
    ReleaseListTileComponent,
    ReleaseListComponent,
    ReleaseContainerComponent,
    LatestNewsComponent,
    GTA19Component,
    GTA18Component,
    GTA17Component,
    YouMayLikeComponent,
    LiveStreamComponent,
    PodcastTileComponent,
    LiveStreamArchiveComponent,
    Gta016Component,
    Gta015Component,
    Gta014Component,
    Gta013Component,
    Gta012Component,
    Gta011Component,
    Gta010Component,
    Gta009Component,
    Gta008Component,
    Gta007Component,
    Gta006Component,
    Gta005Component,
    Gta004Component,
    Gta003Component,
    Gta002Component,
    Gta001Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxAudioPlayerModule,
    BrowserAnimationsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
