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
import { LiveStreamArchiveComponent } from './music/mainComponent/live-stream-archive/live-stream-archive.component'

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
    LiveStreamArchiveComponent
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
