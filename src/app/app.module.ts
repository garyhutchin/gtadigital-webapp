import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoSanitizePipe } from './shared/sanitize.pipe';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { appRoutes } from './routes';
import { DesktopNavComponent } from './nav/desktop-nav/desktop-nav.component';
import { NavItems } from './nav/desktop-nav/nav-items/nav-items.component';
import { TabNavComponent } from './nav/tab-nav/tab-nav.component';
import { TabNavItems } from './nav/tab-nav/tab-nav-items/tab-nav-items.component';
import { BottomNavComponent } from './nav/bottom-mob-nav/bottom-mob-nav.component'
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
import { PodcastTileThumbnail } from './music/mainComponent/podcast-tile/podcast-tile-thumbnail/podcast-tile-thumbnail.component'
import { LiveStreamArchiveComponent } from './music/mainComponent/live-stream-archive/live-stream-archive.component';
import { ReleaseService } from './music/releases/shared/releases.service';
import { ReleaseThumbnailComponent } from './music/releases/release-list/release-thumbnail/release-thumbnail.component';
import { PodcastsListComponent } from './music/podcasts/podcasts-list/podcasts-list.component';
import { PodcastDetailsComponent } from './music/podcasts/podcast-details/podcast-details.component'
import { PodcastsContainerComponent } from './music/podcasts/podcasts-container.component';
import { PodcastThumbnailComponent } from './music/podcasts/podcasts-list/podcast-thumbnail/podcast-thumbnail.component';
import { PodcastService } from './music/podcasts/shared/podcast.service';
import { YouMayLikeThumbnailComponent } from './music/you-may-like/you-may-like-thumbnail/you-may-like-thumbnail.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { ReleaseListResolver } from './music/releases/shared/release-list-resolver.service';
import { AboutComponent } from './about/about.component';
import { ContentService } from './shared/content.service';

import { ReleaseDetailsComponent } from './music/releases/release-details/release-details.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopNavComponent,
    NavItems,
    TabNavComponent,
    TabNavItems,
    BottomNavComponent,
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
    PodcastTileThumbnail,
    LiveStreamArchiveComponent,
    PodcastsListComponent,
    PodcastDetailsComponent,
    PodcastsContainerComponent,
    PodcastThumbnailComponent,
    YouMayLikeThumbnailComponent,
    PageNotFoundComponent,
    AboutComponent,
    NoSanitizePipe,
    ReleaseDetailsComponent
  ],

  providers: [
    ReleaseService,
    MostPopularService,
    LatestNewsService,
    PodcastService,
    ReleaseListResolver,
    ContentService
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'gtadigital-app'),
    AngularFirestoreModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
