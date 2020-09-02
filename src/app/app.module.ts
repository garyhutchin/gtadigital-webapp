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
import { MostPopularReleaseThumbnail } from './main/most-popular/most-pop-release-thumbnail/most-pop-release-thumbnail.component';
import { MostPopularPodcastThumbnail } from './main/most-popular/most-pop-podcast-thumbnail/most-pop-podcast-thumbnail.component';
import { MostPopularService } from './main/shared/most-pop.service';
import { MusicMainComponent } from './music/mainComponent/music-main.component';
import { ReleaseListTileComponent } from './music/mainComponent/release-list-tile/release-list-tile.component';
import { ReleaseListComponent } from './music/releases/release-list/release-list.component';
import { ReleaseListThumbnail } from './music/mainComponent/release-list-tile/release-list-thumbnail/release-list-thumbnail.component';
import { ReleaseContainerComponent } from './music/releases/release-container.component';
import { LatestNewsComponent } from './main/latest-news/latest-news.component';
import { LatestNewsService } from './main/shared/latest-news.service';
import { LatestNewsThumbnail } from './main/latest-news/latest-news-thumbnail/latest-news-thumbnail.component';
import { YouMayLikeComponent } from './music/you-may-like/you-may-like.component';
import { LiveStreamComponent } from './main/live-stream/live-stream.component';
import { PodcastTileComponent } from './music/mainComponent/podcast-tile/podcast-tile.component';
import { LiveStreamArchiveComponent } from './music/mainComponent/live-stream-archive/live-stream-archive.component';
import { ReleaseService } from './music/releases/shared/releases.service';
import { ReleaseThumbnailComponent } from './music/releases/release-list/release-thumbnail/release-thumbnail.component';
import { PodcastsListComponent } from './music/podcasts/podcasts-list/podcasts-list.component';
import { PodcastsContainerComponent } from './music/podcasts/podcasts-container.component';
import { PodcastThumbnailComponent } from './music/podcasts/podcasts-list/podcast-thumbnail/podcast-thumbnail.component';
import { PodcastService } from './music/podcasts/shared/podcast.service';
import { YouMayLikeThumbnailComponent } from './music/you-may-like/you-may-like-thumbnail/you-may-like-thumbnail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

import { GTA19Component } from './music/releases/release-details/gta019/gta019.component';
import { GTA18Component } from './music/releases/release-details/gta018/gta018.component';
import { GTA17Component } from './music/releases/release-details/gta017/gta017.component';
import { GTA16Component } from './music/releases/release-details/gta016/gta016.component';
import { GTA15Component } from './music/releases/release-details/gta015/gta015.component';
import { GTA14Component } from './music/releases/release-details/gta014/gta014.component';
import { GTA13Component } from './music/releases/release-details/gta013/gta013.component';
import { GTA12Component } from './music/releases/release-details/gta012/gta012.component';
import { GTA11Component } from './music/releases/release-details/gta011/gta011.component';
import { GTA10Component } from './music/releases/release-details/gta010/gta010.component';
import { GTA9Component } from './music/releases/release-details/gta009/gta009.component';
import { GTA8Component } from './music/releases/release-details/gta008/gta008.component';
import { GTA7Component } from './music/releases/release-details/gta007/gta007.component';
import { GTA6Component } from './music/releases/release-details/gta006/gta006.component';
import { GTA5Component } from './music/releases/release-details/gta005/gta005.component';
import { GTA4Component } from './music/releases/release-details/gta004/gta004.component';
import { GTA3Component } from './music/releases/release-details/gta003/gta003.component';
import { GTA2Component } from './music/releases/release-details/gta002/gta002.component';
import { GTA1Component } from './music/releases/release-details/gta001/gta001.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopNavComponent,
    TabNavComponent,
    MostPopularComponent,
    MostPopularReleaseThumbnail,
    MostPopularPodcastThumbnail,
    MusicMainComponent,
    ReleaseListTileComponent,
    ReleaseListThumbnail,
    ReleaseListComponent,
    ReleaseThumbnailComponent,
    ReleaseContainerComponent,
    LatestNewsComponent,
    LatestNewsThumbnail,
    YouMayLikeComponent,
    LiveStreamComponent,
    PodcastTileComponent,
    LiveStreamArchiveComponent,
    PodcastsListComponent,
    PodcastsContainerComponent,
    PodcastThumbnailComponent,
    YouMayLikeThumbnailComponent,
    PageNotFoundComponent,
    GTA19Component,
    GTA18Component,
    GTA17Component,
    GTA16Component,
    GTA15Component,
    GTA14Component,
    GTA13Component,
    GTA12Component,
    GTA11Component,
    GTA10Component,
    GTA9Component,
    GTA8Component,
    GTA7Component,
    GTA6Component,
    GTA5Component,
    GTA4Component,
    GTA3Component,
    GTA2Component,
    GTA1Component
  ],

  providers: [
    ReleaseService,
    MostPopularService,
    LatestNewsService,
    PodcastService
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
